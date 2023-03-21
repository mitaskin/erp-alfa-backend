const mongoose = require("mongoose")

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
    }

}, { collation: "users", timestamps: true })

const user = mongoose.model("users", userShema);

module.exports = user;