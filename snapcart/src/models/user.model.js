import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({   
    name: {
        type: String,
        required: true      
    },
    email: {
        type: String,
        required: true,
        unique: true
    },  
    password: {
        type: String,
        required: false  // OAuth users don't need password
    },
    mobile: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ['user', 'deliveryBoy', 'admin'],
        default: 'user'
    },
    image: {
        type: String
    }   
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;