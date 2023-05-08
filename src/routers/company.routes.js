const router = require("express").Router()

// Controllers
const { getCompany, addCompany, updateCompany, deleteCompany } = require('../controllers/company.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation
// Routes

router.get('/', getCompany);
router.get('/:id', getCompany);
router.post('/', addCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router