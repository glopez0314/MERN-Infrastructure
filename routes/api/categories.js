const express = require("express");
const router = express.Router();
const catCtrl = require("../../controllers/api/categories");
const isAdmin = require("../../config/isAdmin");

router.get("/", catCtrl.index);
router.post("/add", isAdmin, catCtrl.create);

module.exports = router;
