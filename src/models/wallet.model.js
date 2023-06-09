const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    currency: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
    refCompany: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }],
    refCompanyId: { type: String },
    refClient: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }],
    refClientId: { type: String },
    HistoryTransactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;

