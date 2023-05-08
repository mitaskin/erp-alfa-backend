const router = require("express").Router()

// Controllers
const { getClients, getClient, createClient, updateClient, deleteClient } = require('../controllers/client.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation

// Routes
router.get('', getClients);
router.get('/:id', getClient);
router.post('', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router