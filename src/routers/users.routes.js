const router = require("express").Router()

// Controllers
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation

// Routes
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router