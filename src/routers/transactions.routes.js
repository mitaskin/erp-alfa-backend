const router = require("express").Router()

// Controllers
const { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } = require('../controllers/transaction.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation


// Routes
router.get('', getTransactions);
router.get('/:id', getTransaction);
router.post('', createTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router