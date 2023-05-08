const router = require("express").Router()

// Controllers
const { getCompany,getCompanyById,createCompany,createUserForCompany,createWalletForCompany,createOrUpdateTransactionForCompany,
        createClient,createWalletForClient,getClient,getClientById,createUserForClient,createOrUpdateTransactionForClient} = require('../controllers/superadmin.controller');
const { tokenCheck } = require("../middlewares/auth")

//Validation


//Routes
router.get('/company', getCompany);
router.get('/company/:id', getCompanyById);
router.post('/company', createCompany);
router.post('/company/:companyId/users', createUserForCompany);
router.post('/company/:companyId/wallets', createWalletForCompany);
router.post('/company/:companyId/transactions', createOrUpdateTransactionForCompany);

router.get('/client', getClient);
router.get('/client/:id', getClientById);
router.post('/client', createClient);
router.post('/client/:clientId/users', createUserForClient);
router.post('/client/:clientId/wallets', createWalletForClient);
//router.post('/client/:clientId/transactions', createOrUpdateTransactionForClient);

module.exports = router