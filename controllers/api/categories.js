const Category = require("../../models/Category");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const cats = await Category.find({});
  res.json(cats);
}

async function create(req, res) {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
}
