const { User } = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.getAddress = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user){
            throw new ApiError(404, "User Not Found")
        }
        const address = user.address;
        return res.status(200).json(
            new ApiResponse(200, address, "Address Retrived Successfully")
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