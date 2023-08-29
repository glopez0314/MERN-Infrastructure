const express = require("express");
const router = express.Router();
const catCtrl = require("../../controllers/api/categories");

router.post("/add", catCtrl.create);

module.exports = router;
