import mongoose from 'mongoose';


const CollectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },

    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },

    images: {
        type: [{
            name: {type: String, required: true},
            intro: {type: String, required: true},
            url: {type: url, required: true},
            price: {type: Number, required: true}
        }],
    },




}, {timestamps: true});

export default mongoose.models.Collection || mongoose.model('Collection', CollectionSchema);