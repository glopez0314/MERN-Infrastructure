const Category = require("../../models/Category");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
}
