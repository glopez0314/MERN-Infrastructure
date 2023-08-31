const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");

router.get("/", productsCtrl.index);
router.get("/:id", productsCtrl.show);
router.post("/add", productsCtrl.create);

module.exports = router;