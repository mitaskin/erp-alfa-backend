const router = require("express").Router()
const auth = require("./auth.routes")
//const userModel = require("./src/models");

router.use(auth)


module.exports = router
