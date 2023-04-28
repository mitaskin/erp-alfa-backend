const router = require("express").Router()

// Controllers
const { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } = require('../controllers/transaction.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation


// Routes
router.get('/transactions', getTransactions);
router.get('/transactions/:id', getTransaction);
router.post('/transactions', createTransaction);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);

module.exports = router