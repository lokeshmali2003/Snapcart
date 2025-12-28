import mongoose from 'mongoose';

const grocerySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['fruits &vegetables', 'dairy & eggs', 'Rice , Atta & Grains', 'Snacks & Biscuits', 'Spices & Masalas', 'Beverages & Drinks', 'Personal Care', 'Household Essentials', 'Instant & Packaged Foods', 'Baby & Pet Care']
    },
    price: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Grocery = mongoose.models.Grocery || mongoose.model('Grocery', grocerySchema);

export default Grocery;