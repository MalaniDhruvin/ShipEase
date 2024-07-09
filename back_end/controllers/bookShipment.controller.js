const Shipment = require("../models/shipment.model");
const { User } = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const { v4: uuidv4 } = require('uuid');


exports.bookShipment = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user){
        throw new ApiError(500, "Registration is Required to Book a Shipment");
    }
    const userId = user._id;
    if (!userId){
        throw new ApiError(400, "Registration is Required to Book Shipment");
    }
    const {origin, destination, weight, status, pickup_date, delivery_date, cost} = req.body;

    if (
        Object.values(origin).some((field) => field === null || field?.trim() === "")
    ){
        throw new ApiError(400, "Origin Address Fields are Missing")
    }
    if (
        Object.values(destination).some((field) => field === null || field?.trim() === "")
    ){
        throw new ApiError(400, "Some Address Fields are Missing")
    }
    if (
        [weight, status, pickup_date, delivery_date, cost].some((field) => field === null || field?.trim() === "")
    ){
        throw new ApiError(400, "Some Fields are Missing")
    }
    

    const trackingId = uuidv4();

    const shipment = await Shipment.create({
        userId,
        trackingId,
        origin,
        destination,
        weight,
        status,
        pickup_date,
        delivery_date,
        cost,
    })
    
    if(!shipment){
        throw new ApiError(500, "Shipment is not Registered in database");
    }

    return res.status(201).json(
        new ApiResponse(201, shipment, "Shipment Registerd Successfully")
    )
})