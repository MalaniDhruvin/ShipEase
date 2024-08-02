const {User} = require("../models/user.model.js");
const ApiResponse  = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false});
        return {accessToken, refreshToken};
    } catch (error) {
        throw new ApiError(501, "something went wrong while generating the access token and refresh token")
    }
}

exports.userLogin = asyncHandler(async(req, res) => {
    try {
        const { email, password } = req.body;
        const isUser = await User.findOne({email
            // $and: [{
            //         email: email,
            //     },
            //     {
            //         password: password,
            //     },
            // ],
        });
        if (!isUser){
            throw new ApiError(404, "User does not exist")
        }
        
        const isPasswordCorrect = isUser.isPasswordCorrect(password)
        if (!isPasswordCorrect){
            throw new ApiError(404, "Invalid Password")
        }

        const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(isUser._id)

        const loggedInUser = await User.findById(isUser._id).select(
            "-password -refreshToken"
        )

        const options = {
            httpOnly: true,
            secure: true,
        }

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, isUser, "Success")
        )
    } catch (error) {
        throw new ApiError(404, error.message);
    }
})

exports.userLogout = asyncHandler(async(req, res) => {
    try {
        console.log(1);
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    refreshToken: undefined
                }
            },
            {
                new: true
            }
        )
        console.log(2);

        const options = {
            httpOnly: true,
            secure: true,
        }
        console.log(3); 

        return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "User logged out")
        )


    } catch (error) {
        throw new ApiError(401, 'User could not logged out')
    }
})

exports.passwordChange = asyncHandler(async(req, res) => {
    try {
        
        const {oldPassword, newPassword} = req.body;

        const user = await User.findById(req.user?._id);

        if (!user){
            throw new ApiError(401, "user not found")
        }

        const correctPassword = await user.isPasswordCorrect(oldPassword);

        if (!correctPassword){
            throw new ApiError(401, "invalid password")
        }

        user.password = newPassword
        User.save({validateBeforeSave: false})

        return res.status(200).json(new ApiResponse(200, {}, "password changed"))

    } catch (error) {
        throw new ApiError(400)
    }
})

exports.accessRefreshToken = (asyncHandler(async(req, res) => {
    try {
        const currRefreshToken = req.cookies.refreshToken;
        if (!currRefreshToken){
            throw new ApiError(401, "unauthorized request")
        }
        const decodedRT = await jwt.verify(currRefreshToken, process.env.JWT_REFRESH_SECRET);
        const loggedInUser = await User.findById(decodedRT._id);
        if (!loggedInUser){
            throw new ApiError(404, "User not found");
        }
        const userRefreshToken = loggedInUser.refreshToken;
        if (currRefreshToken !== userRefreshToken){
            throw new ApiError(404, "Expired or Invalid Refresh Token");
        }
        const {accessToken, refreshToken} = await generateAccessTokenAndRefreshToken(user._id);
        const options = {
            httpOnly: true,
            secure: true
        }
        return res
        .status(200)
        .cookies("accessToken", accessToken, options)
        .cookies("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {accessToken, refreshToken}, "Access Refresh Token generated")
        )
    } catch (error) {
        if (error instanceof ApiError){
            return next(error);
        } else {
            console.error("Unexpected error: ", error);
            return next(new ApiError(500, "An unexpected error occurred"));
        }
    }
}))