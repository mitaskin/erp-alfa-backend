const Company = require('../models/company.model');
const User = require('../models/user.model');
const Wallet = require('../models/wallet.model');
const Transaction = require('../models/transaction.model');


const getCompany = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Şirketler yüklenirken hata oluştu' });
  }
};

const getCompanyById = async (req, res) => {
  try {
    const companies = await Company.find({ companyId: req.params.id });
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Şirketler yüklenirken hata oluştu' });
  }
};

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
    
    company.users.push(user)
    await company.save()

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

    company.wallets.push(wallet);
    await company.save()
Ş
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
      { _id: req.body._id, company: company._id },
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
  getCompany,
  getCompanyById,
  createCompany,
  createUserForCompany,
  createWalletForCompany,
  createOrUpdateTransactionForCompany,
}
