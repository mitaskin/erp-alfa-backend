const router = require("express").Router()

// Controllers
const { home } = require("../controllers/home.controller")
const { tokenCheck } = require("../middlewares/auth")

//Validation
const authValidation = require("../validators/auth.validation")

// Routes
router.get("/", tokenCheck, home)

module.exports = router