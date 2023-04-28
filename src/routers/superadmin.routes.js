const router = require("express").Router()

// Controllers
const {    createCompany,createUserForCompany,createWalletForCompany,createOrUpdateTransactionForCompany,} = require('../controllers/superadmin.controller');
const { tokenCheck } = require("../middlewares/auth")

//Validation

// Routes
router.post('/superadmin/companies', createCompany);
router.post('/superadmin/companies/:companyId/users', createUserForCompany);
router.post('/superadmin/companies/:companyId/wallets', createWalletForCompany);
router.post('/superadmin/companies/:companyId/transactions', createOrUpdateTransactionForCompany);

module.exports = router