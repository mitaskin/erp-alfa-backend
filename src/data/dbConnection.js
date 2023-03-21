const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose.connect('mongodb://localhost:27017/erp-alfa-db',
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