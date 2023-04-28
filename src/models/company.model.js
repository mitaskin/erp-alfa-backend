const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.floor(100000 + Math.random() * 900000).toString()
    },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }],
    wallets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }],
    taxNumber: { type: String, required: true },
    taxOffice: { type: String, required: true },
    owners: [{ type: String }],
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    todoList: [{ type: String }],
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
