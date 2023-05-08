const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.floor(100000 + Math.random() * 900000).toString()
    },
    title: { type: String, required: false },
    description: { type: String, required: false },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: false,
    },
    amount: { type: Number, required: false },
    wallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    createdAt: { type: Date, default: Date.now },
    walletTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: false },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: false },
}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;