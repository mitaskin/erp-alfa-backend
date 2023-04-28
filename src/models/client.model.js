const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.floor(100000 + Math.random() * 900000).toString()
    },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    taxNumber: { type: String },
    taxOffice: { type: String },
    wallets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }],
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    isVehicle: { type: Boolean, default: false },
    plate: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
