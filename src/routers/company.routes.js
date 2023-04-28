const router = require("express").Router()

// Controllers
const { getCompanies, addCompany, updateCompany, deleteCompany } = require('../controllers/company.controller')
const { tokenCheck } = require("../middlewares/auth")

//Validation
// Routes

router.get('/company', getCompanies);
router.get('/company/:id', getCompanies);
router.post('/company', addCompany);
router.put('/company/:id', updateCompany);
router.delete('/company/:id', deleteCompany);

module.exports = router