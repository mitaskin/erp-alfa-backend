const Transaction = require('../models/transaction.model');
const Company = require('../models/company.model');

// Tüm işlemleri listele
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ updatedAt: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Belirli bir işlemi alma
const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Yeni işlem oluşturma
const createTransaction = async (req, res) => {

  try {
    const tempUser = req.body.user

    const tempCompany = await Company.findById(tempUser.company._id)
      .populate('wallets')
      .populate('users')
      .populate('clients');

    const tempWallet = tempCompany.wallets.find(wallet => wallet.currency === req.body.currency)

    const tempPayload = (
      {
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        currency: req.body.currency,
        amount: req.body.amount,

        createdBy: tempUser._id,
        company: tempCompany._id,
        wallet: tempWallet._id,

        companyId: tempUser.company.companyId,
        userId: tempUser.userId,
        client: req.body.client,
        walletTo: req.body.walletTo,
      }
    )

    const newTransaction = new Transaction(tempPayload);
    const transaction = await newTransaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// İşlem güncelleme
const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// İşlem silme
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
};