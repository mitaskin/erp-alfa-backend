const router = require("express").Router()

// Controllers
const { getCompanies, addCompany, updateCompany, deleteCompany } = require('../controllers/company.controller')
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { getClients, getClient, createClient, updateClient, deleteClient } = require('../controllers/client.controller')
const { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } = require('../controllers/transaction.controller')
const { login, register, me } = require("../controllers/auth.controller")
const { home } = require("../controllers/home.controller")
const { tokenCheck } = require("../middlewares/auth")

//Validation
const authValidation = require("../validators/auth.validation")
const recordValidation = require("../validators/record.validation")

// Routes
router.get("/home", tokenCheck, home)

router.post("/register", authValidation.register, register)
router.post("/login", authValidation.login, login)
router.get("/me", tokenCheck, me)

router.get('/companies', getCompanies);
router.get('/companies/:id', getCompanies);
router.post('/companies', addCompany);
router.put('/companies/:id', updateCompany);
router.delete('/companies/:id', deleteCompany);

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/clients', getClients);
router.get('/clients/:id', getClient);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

router.get('/transactions', getTransactions);
router.get('/transactions/:id', getTransaction);
router.post('/transactions', createTransaction);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);

module.exports = router