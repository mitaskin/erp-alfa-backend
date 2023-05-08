const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
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
    company: { type: [companySchema] }
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

module.exports = SuperAdmin;
