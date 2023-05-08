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
    taxNumber: { type: String, default: "Tanımlanmadı" },
    taxOffice: { type: String, default: "Tanımlanmadı" },
    wallets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }],
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    isVehicle: { type: Boolean, default: false },
    plate: { type: String, default: "Tanımlanmadı" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    job: {type: String, enum: ['Şoför', 'Muhasebe', 'Yönetici', 'Bakımcı', 'Müşteri', 'Kullanıcı','undefined'], default:'undefined'},
    post: {type: String, default:'undefined'},
    role: {type: String, enum: ['Şahıs', 'Ticari', 'Araç', 'undefined'], default:'undefined'},

}, { collation: { locale: 'en_US', strength: 1 }, timestamps: true });

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
