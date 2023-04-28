const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.floor(100000 + Math.random() * 900000).toString()
    },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'CEO', 'manager', 'account', 'employee', 'user'],
        required: true,
    },
    accessAllowed: {
        type: Boolean,
        default: false,
    },
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;