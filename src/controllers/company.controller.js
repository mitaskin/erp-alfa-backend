const Company = require('../models/company.model');

// Tüm şirketleri listele
const getCompany = async (req, res) => {
  try {
    const company = await Company.find();
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Şirketler yüklenirken hata oluştu' });
  }
};

// Yeni şirket ekle
const addCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: 'Şirket eklenirken hata oluştu' });
  }
};

// Şirket bilgilerini güncelle
const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Şirket güncellenirken hata oluştu' });
  }
};

// Şirket sil
const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Şirket başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Şirket silinirken hata oluştu' });
  }
};

module.exports = {
  getCompany,
  addCompany,
  updateCompany,
  deleteCompany,
}
