const { User } = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken")

exports.verifyUser = asyncHandler(async(req, res, next) => {
    try {
        const accessToken = req.cookies?.accessToken;
        if (!accessToken){
            throw new ApiError(400, "Access Token Not Found");
        }
        const decodedInfo = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const user = await User.findById(decodedInfo._id).select("-password -refreshToken");
        if (!user){
            throw new ApiError(404, "Invalid Access Token");
        }
        req.user = user;
        next();
    } catch (error) {
        if (error instanceof ApiError) {
            return next(error);
        } else {
            console.error("Unexpected error: ", error);
            return next(new ApiError(500, "An unexpected error occurred"));
        }
    }
})