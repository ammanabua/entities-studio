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
    },

    items: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Art"
        }],
    },




}, {timestamps: true});

export default mongoose.models.Collection || mongoose.model('Collection', CollectionSchema);