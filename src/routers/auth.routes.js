const router = require("express").Router()
const { login, register, me } = require("../controllers/auth.controller")
const { tokenCheck } = require("../middlewares/auth")
const authValidation = require("../validators/auth.validation")


router.post("/register", authValidation.register, register)
router.post("/login", authValidation.login, login)
router.get("/me",tokenCheck, me)


module.exports = router