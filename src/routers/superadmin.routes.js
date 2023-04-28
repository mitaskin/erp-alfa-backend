const router = require("express").Router()

// Controllers
const { getCompanyById,getCompany,createCompany,createUserForCompany,createWalletForCompany,createOrUpdateTransactionForCompany,} = require('../controllers/superadmin.controller');
const { tokenCheck } = require("../middlewares/auth")

//Validation

// Routes
router.get('/company', getCompany);
router.get('/company/:id', getCompanyById);
router.post('/company', createCompany);
router.post('/company/:companyId/users', createUserForCompany);
router.post('/company/:companyId/wallets', createWalletForCompany);
router.post('/company/:companyId/transactions', createOrUpdateTransactionForCompany);

module.exports = router