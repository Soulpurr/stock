const mongoose = require("mongoose");

const connectTodb = async () => {
  await mongoose.connect(
    "mongodb+srv://api12:6E5SCNNgaRjgKjAK@cluster0.5zqtueq.mongodb.net/test123?retryWrites=true&w=majority"
  );
  console.log("connected");
};
module.exports = connectTodb;