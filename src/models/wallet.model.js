const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    currency: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;

