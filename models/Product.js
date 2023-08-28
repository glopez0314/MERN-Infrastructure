const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("./Catergory");
const productSchema = require("./productSchema");

module.exports = mongoose.model("Product", productSchema);
