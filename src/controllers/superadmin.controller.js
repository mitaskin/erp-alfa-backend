const Company = require('../models/company.model');
const User = require('../models/user.model');
const Wallet = require('../models/wallet.model');
const Transaction = require('../models/transaction.model');

// Süperadmin için yöntemler
const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserForCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const user = new User({ ...req.body, company: company._id });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createWalletForCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const wallet = new Wallet({ ...req.body, company: company._id });
    await wallet.save();
    res.status(201).json(wallet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrUpdateTransactionForCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.body._id, companyFrom: company._id },
      req.body,
      { new: true, upsert: true }
    );
    await transaction.save();
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    createCompany,
    createUserForCompany,
    createWalletForCompany,
    createOrUpdateTransactionForCompany,
}
