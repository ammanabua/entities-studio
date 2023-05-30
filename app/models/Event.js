import mongoose from 'mongoose';


const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },

    location: {
        type: String,
        required: true,
        maxlength: 200,
    },

    theme: {
        type: String,
        required: true,
        maxlength: 200,
    },

    host: {
        type: String,
        required: true,
        maxlength: 200,
    },

    price: {
        type: [Number]
    }




}, {timestamps: true});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);