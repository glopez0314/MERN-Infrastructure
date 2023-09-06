const express = require("express");
const router = express.Router();
const subCatCtrl = require("../../controllers/api/subCategories");
const isAdmin = require("../../config/isAdmin");

router.get("/", subCatCtrl.getAllSubCats);
router.post("/add", isAdmin, subCatCtrl.create);

module.exports = router;
