const express = require("express");
const router = express.Router();
const catCtrl = require("../../controllers/api/categories");

router.get("/", catCtrl.index);
router.post("/add", catCtrl.create);

module.exports = router;
