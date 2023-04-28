const router = require("express").Router()

// Controllers
const { getClients, getClient, createClient, updateClient, deleteClient } = require('../controllers/client.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation

// Routes
router.get('/clients', getClients);
router.get('/clients/:id', getClient);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

module.exports = router