import mongoose from 'mongoose';


const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    host: {
        type: String,
        required: true,
    },

    price: {
        type: [Number]
    }




}, {timestamps: true});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);