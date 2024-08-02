const Shipment = require("../models/shipment.model");
const { User } = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const { v4: uuidv4, validate } = require('uuid');


exports.bookShipment = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            throw new ApiError(500, "Registration is Required to Book a Shipment");
        }
        const userId = user._id;
        if (!userId) {
            throw new ApiError(400, "Registration is Required to Book Shipment");
        }
        const { origin, destination, weight, cost } = req.body;

        if (
            Object.values(origin).some((field) => field === undefined)
        ) {
            throw new ApiError(400, "Origin Address Fields are Missing")
        }
        if (
            Object.values(destination).some((field) => field === undefined)
        ) {
            throw new ApiError(400, "Some Address Fields are Missing")
        }
        if (
            [weight].some((field) => field === undefined)
        ) {
            throw new ApiError(400, "Some Fields are Missing")
        }

        const pickup_date = new Date();
        const delivery_date = new Date();
        const deliveryTimeframe = Math.floor(Math.random() * 3) + 2;
        delivery_date.setDate(pickup_date.getDate() + deliveryTimeframe);

        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedPickupDate = pickup_date.toLocaleDateString('en-IN', options);
        const formattedDeliveryDate = delivery_date.toLocaleDateString('en-IN', options);

        const trackingId = uuidv4();

        const shipment = await Shipment.create({
            userId,
            trackingId,
            origin, 
            destination,
            weight,
            status: 'pending',
            pickup_date,
            delivery_date,
            cost,
        })

        if (!shipment) {
            throw new ApiError(500, "Shipment is not Registered in database");
        }

        await user.shipments.push(shipment._id);
        await user.save({ validateBeforeSave: false });

        return res
            .status(201)
            .json(
                new ApiResponse(201, shipment, "Shipment Registerd Successfully")
            )
    } catch (error) {
        throw new ApiError(400, error.message)
    }
})