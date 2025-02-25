const { User } = require("../models/user.model.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const asyncHandler = require("../utils/asyncHandler.js");
exports.userProfile = asyncHandler( async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).select(
            "-password -refreshToken -_id"
        );
        if (!user){
            throw new ApiError(404, "User Not Found");
        }

        return res.status(200).json(
            new ApiResponse(200, user, "User Details Fetched")
        )
        
    } catch (error) {
        throw new ApiError(400, error.message)
    }
})