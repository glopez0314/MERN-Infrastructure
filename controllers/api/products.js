const Product = require("../../models/Product");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  const products = await Product.find({})
    .populate("category")
    .populate("subCategory")
    .exec();
  res.json(products);
}

async function show(req, res) {
  const product = await Product.findById(req.params.id);
  res.jason(product);
}
