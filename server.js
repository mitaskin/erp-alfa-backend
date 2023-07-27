require("express-async-errors")
require("dotenv").config()

const express = require('express')
const dbConnection = require("./src/data/dbConnection.js")
const app = express()
const port = process.env.PORT || 3000
const router = require("./src/routers")
const errorHandlerMiddleware = require("./src/middlewares/errorHandler.js")
const cors = require("cors")
const corsOptions = require("./src/utils/corsOptions")
const mongoSanitize = require('express-mongo-sanitize')
const cookieParser = require('cookie-parser')


//DB Connection
dbConnection()

//Middlewares
app.use(express.json())
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(cookieParser())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Cookie'); // "Cookie" başlığını ekleyin
  next();
});

//CORS
app.use(cors(corsOptions))

//First Request
app.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies)
  console.log('Signed Cookies: ', req.signedCookies)

  res.json({
    message: "ERP-ALFA-BACEND is Run."
  })
})



//Routers
app.use("/", router)

//Error Handeler
app.use(errorHandlerMiddleware)

//Port listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
