const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Otp: {
        type: String,
    },
    role: {
        type: String,
        enum: ['User', 'admin'],
        default: 'User'

    },
    isverified: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);