const mongoose = require("mongoose");
const DB = "mongodb+srv://rachit:1234@cluster0.qkhsycr.mongodb.net/";
const db = () => {
  mongoose
    .connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data, err) => {
      console.log(`mongodb connected: ${data.connection.host}`);
    });
};
module.exports = db;
