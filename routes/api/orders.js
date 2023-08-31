const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/orders");

router.get("/", ordersCtrl.history);
router.get("/cart", ordersCtrl.cart);
router.get("/cart/checkout", ordersCtrl.checkout);
router.post("/cart/item/:id", ordersCtrl.addToCart);
router.put("/cart/qty", ordersCtrl.changeQty);

module.exports = router;
