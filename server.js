require("express-async-errors")
require("dotenv").config()

const express = require('express')
const dbConnection = require("./src/data/dbConnection.js")
const app = express()
const port = process.env.PORT || 3000
const router = require("./src/routers")
const errorHandlerMiddleware = require("./src/middlewares/errorHandler.js")

//DB Connection
dbConnection()

//Middlewares
app.use(express.json())
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

//First Request
app.get('/', (req, res) => {
  res.json({
    message: "ERP-ALFA-BACEND is Run"
  })
})

//Routers
app.use("/api", router)

//Error Handeler
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
