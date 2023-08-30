const express = require("express");
const router = express.Router();
const subCatCtrl = require("../../controllers/api/subCategories");

router.get("/", subCatCtrl.getAllSubCats);
router.post("/add", subCatCtrl.create);

module.exports = router;
