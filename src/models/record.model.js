const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({

    fullname: {
        type: String,
        require: true,
        trim: true
    },
    job: {
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
    department: {
        type: String,
        require: true,
        trim: true
    },
    taxoffice: {
        type: String,
        require: true,
        trim: true
    },
    taxnumber: {
        type: String,
        require: true,
        trim: true
    },
    curator: {
        type: String,
        require: true,
        trim: true
    },
    curatorphone: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: String,
        require: true,
        trim: true
    },
    balance_count: {
        type: String,
        require: true,
        trim: true
    },
    balance_type: {
        type: String,
        require: true,
        trim: true
    },
    balance_try: {
        type: String,
        require: true,
        trim: true
    },
    balance_usd: {
        type: String,
        require: true,
        trim: true
    },
    balance_euro: {
        type: String,
        require: true,
        trim: true
    }

}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true })

const Record = mongoose.model("record", recordSchema);

module.exports = Record;
