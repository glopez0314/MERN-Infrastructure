const SubCategory = require("../../models/SubCategory");

module.exports = {
  getAllSubCats,
  create,
};

async function getAllSubCats(req, res) {
  const subCats = await SubCategory.find({});
  res.json(subCats);
}

async function create(req, res) {
  try {
    const subCategory = await SubCategory.create(req.body);
    res.json(subCategory);
  } catch (err) {
    res.status(400).json(err);
  }
}
