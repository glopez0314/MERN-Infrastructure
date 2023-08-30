const Product = require("../../models/Product");

module.exports = {
  index,
  show,
  create,
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

async function create(req, res) {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
}
