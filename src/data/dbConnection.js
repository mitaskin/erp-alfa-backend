const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose.connect(process.env.DB_URL_DEV,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
    .then(() => {
      console.log("Connected to the DB succesfuly ");
    })
    .catch((err) => {
      console.log("DB Connection Failed!", err);
    })
}

module.exports = dbConnection