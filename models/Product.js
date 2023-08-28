const mongoose = require("mongoose");

require("./Catergory");
const productSchema = require("./ProductSchema");

module.exports = mongoose.model("Product", productSchema);
