const mongoose = require("mongoose");

require("./Category");
require("./SubCategory");
const productSchema = require("./ProductSchema");

module.exports = mongoose.model("Product", productSchema);
