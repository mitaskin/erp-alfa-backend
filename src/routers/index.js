const router = require("express").Router()
const auth = require("./auth.routes")
const superadmin = require("./superadmin.routes")
const home = require("./home.routes")
const company = require("./company.routes")
const users = require("./users.routes")
const clients = require("./clients.routes")
const transactions = require("./transactions.routes")

router.use("/api/auth", auth);
router.use("/api/admin", superadmin)
router.use("/api/home", home)
router.use("/api/company", company)
router.use("/api/users", users)
router.use("/api/clients", clients)
router.use("/api/transactions", transactions)

module.exports = router
