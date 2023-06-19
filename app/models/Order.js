import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    details: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Art"
        }]
    },

    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    }
}, {timestamps: true})


export default mongoose.models.Order || mongoose.model('Order', OrderSchema);