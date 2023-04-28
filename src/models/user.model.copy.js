const mongoose = require("mongoose");

const userShema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },
    lastname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    role: {
        type: String,
        require: true,
        trim: true
    },
    company: {
        type: String,
        require: true,
        trim: true
    }

}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true })

const User = mongoose.model("users", userShema);

module.exports = User;
