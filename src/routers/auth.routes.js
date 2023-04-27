const router = require("express").Router()

const { login, register, me } = require("../controllers/auth.controller")
const { home } = require("../controllers/home.controller")
const { addRecord } = require("../controllers/record.controller")
const { tokenCheck } = require("../middlewares/auth")

const authValidation = require("../validators/auth.validation")
const recordValidation = require("../validators/record.validation")


router.post("/register", authValidation.register, register)
router.post("/login", authValidation.login, login)
router.get("/me",tokenCheck,me)

router.get("/home",tokenCheck,home)

router.post("/addrecord",tokenCheck)

module.exports = router