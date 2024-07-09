const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

// Define the address schema without creating a separate model
const addressSchema = new Schema({
    streetAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    country: {
        type: String,
    },
}, { _id: false });

// Define the user schema
const userSchema = new Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: addressSchema,
    },
    shipments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Shipment'
        }
    ],
    refreshToken: {
        type: String,
    }
}, { timestamps: true });

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

// Check if the password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.JWT_ACCESS_EXPIRY }
    );
};

// Generate refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: process.env.JWT_REFRESH_EXPIRY }
    );
};

const User = mongoose.model("User", userSchema);

module.exports = { User , addressSchema};
