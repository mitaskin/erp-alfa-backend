const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.floor(100000 + Math.random() * 900000).toString()
    },
    description: { type: String, required: true },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true,
    },
    amount: { type: Number, required: true },
    wallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    walletTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
