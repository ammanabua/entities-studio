import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    details: {
        type: [{

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
})


export default mongoose.models.Order || mongoose.model('Order', OrderSchema);