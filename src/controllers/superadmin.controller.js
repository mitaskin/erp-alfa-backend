const Company = require('../models/company.model');
const Client = require('../models/client.model')
const User = require('../models/user.model');
const Wallet = require('../models/wallet.model');
const Transaction = require('../models/transaction.model');

//Tüm Şirketleri Listele
const getCompany = async (req, res) => {
  try {
    const company = await Company.find();
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Şirketler yüklenirken hata oluştu' });
  }
};

//Belirli bir şirketi alma
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.find({ companyId: req.params.id });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Şirketler yüklenirken hata oluştu' });
  }
};

//Yeni Şirket Oluşturma
const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Şirket için Kullanıcı Oluşturma
const createUserForCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const user = new User({ ...req.body, company: company._id });
    await user.save();

    company.users.push(user);
    await company.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Şirket için Cüzdan Oluşturma
const createWalletForCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ companyId: req.params.companyId });
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const wallet = new Wallet({ ...req.body, refCompany: company._id, refCompanyId: company.companyId });
    await wallet.save();

    company.wallets.push(wallet);
    await company.save();

    res.status(201).json(wallet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Şirket için yeni transaction oluşturma
const createOrUpdateTransactionForCompany = async (req, res) => {

  console.log(req.body);
  try {
    const company = await Company.findOne({ companyId: req.params.companyId })
    .populate('wallets')
    .populate('users')
    .populate('clients');

    if (!company) {
      res.status(404).json({ error: 'Company not found for Main' });
      return;
    }

    console.log(company);


    const transaction = new Transaction({ ...req.body, companyId: req.params.companyId });
    await transaction.save();
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Tüm müşterileri listele
const getClient = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Belirli bir müşteriyi alma
const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Yeni Client Oluşturma
const createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Şirket için Kullanıcı Oluşturma
const createUserForClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);
    if (!client) {
      res.status(404).json({ error: 'Client not found' });
      return;
    }

    const user = new User({ ...req.body, client: client._id });
    await user.save();

    client.users.push(user);
    await client.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//Client için Cüzdan Oluşturma
const createWalletForClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);
    if (!client) {
      res.status(404).json({ error: 'Client not found' });
      return;
    }

    const wallet = new Wallet({ ...req.body, refClient: client._id });
    await wallet.save();

    client.wallets.push(wallet);
    await client.save();

    res.status(201).json(wallet);
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
  getClient,
  getClientById,
  createClient,
  createUserForClient,
  createWalletForClient
}
