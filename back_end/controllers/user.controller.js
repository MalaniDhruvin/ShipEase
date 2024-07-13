const {User} = require("../models/user.model.js");
const ApiResponse  = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
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

        const options = {
            httpOnly: true,
            secure: true,
        }

        return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "User logged out")
        )


    } catch (error) {
        throw new ApiError(401, 'User not found')
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