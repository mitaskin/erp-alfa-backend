const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/erp-alfa-db", {
    useNewUrlParser: true,
    useEnifiedTopology: true
})
    .then(() => {
        console.log("Db connection is success");
    })
    .catch((error) => {
        console.log("Db connection is Failed! ", error);
    })




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL_DEV;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("erp-alfa-db").collection("user");
  // perform actions on the collection object
  client.close();
});
   