const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const {User} = require("../models/user.model.js");
const asyncHandler = require("../utils/asyncHandler.js");

exports.registerUser = asyncHandler(async (req, res) => {

    try {
        console.log(req.body);
        const {fullname, email, password, phone, address} = req.body;   
        if (
            [fullname, email, password, phone].some((field) => field === undefined)
        ){
            throw new ApiError(400, "Some Fields are Missing")
        }
        if (
            Object.values(address).some((field) => field === undefined)
        ){
            throw new ApiError(400, "Some Address Fields are Missing")
        }

        const userExists = await User.findOne({
                email: email
            }
        )

        if (userExists){
            throw new ApiError(409, "User with same email already exists")
        }
        const user = await User.create({
            fullname, 
            email, 
            password, 
            phone, 
            address,
        })
        
        const createdUser = await User.findById(user._id).select(
            "-password"
        )

        if (!createdUser){
            throw new ApiError(500, "Something went wrong while creating the user")
        }

        return res.status(201).json(
            new ApiResponse(201, createdUser, "User Registerd Successfully")
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