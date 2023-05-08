const router = require("express").Router()

// Controllers
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation

// Routes
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router