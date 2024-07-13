const mongoose = require('mongoose');
const {Schema}  = require("mongoose");
const { addressSchema} = require('./user.model');


const shipmentSchema = mongoose.Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    trackingId: { 
        type: String, 
        unique: true 
    },
    origin: addressSchema,
    destination: addressSchema,
    weight: { 
        type: Number 
    },
    // dimensions: {
    //     length: { type: Number},
    //     width: { type: Number},
    //     height: { type: Number} 
    // },
    status: { 
        type: String, 
        enum: ['pending', 'in_transit', 'delivered', 'cancelled'], 
        default: 'pending'
    },
    pickup_date: { 
        type: Date
    },
    delivery_date: { 
        type: Date 
    },
    cost: {
        type: Number
    },
}, 
{ timestamps: true });

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
