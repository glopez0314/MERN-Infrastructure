const express = require("express");
const router = express.Router();
const productsCtrl = require("../../controllers/api/products");
const isAdmin = require("../../config/isAdmin");

router.get("/", productsCtrl.index);
router.get("/:id", productsCtrl.show);
router.post("/add", isAdmin, productsCtrl.create);

module.exports = router;
