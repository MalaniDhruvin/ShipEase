const Shipment = require("../models/shipment.model");
const { User } = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

exports.getShipments = asyncHandler(async(req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user){
            throw new ApiError(404, "user not found");
        }
        const shipmentIds = user.shipments;
        const shipments = [];
        for (let ship_id of shipmentIds){
            const shipment = await Shipment.findById(ship_id);
            if (!shipment){
                throw new ApiError(404, "shipment not found")
            }      
            shipments.push(shipment);
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200, shipments, "Shipments Retrieved")
        )
        
    } catch (error) {
        if (error instanceof ApiError) {
            return next(error);
        } else {
            console.error("Unexpected error: ", error);
            return next(new ApiError(500, "An unexpected error occurred"));
        }
    }

})