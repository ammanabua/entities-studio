import mongoose from "mongoose";


const ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true,
    },

    isOwned: {
        type: Boolean,
        default: false,
    },

    tag: {
        type: String,
    },

    price: {
        type: Number,
        required: true
    }
})

export default mongoose.models.Image || mongoose.model('Image', ImageSchema);