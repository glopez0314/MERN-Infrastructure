const express = require("express");
const router = express.Router();
const ordersCtrl = require("../../controllers/api/orders");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", ensureLoggedIn, ordersCtrl.history);
router.get("/cart", ensureLoggedIn, ordersCtrl.cart);
router.get("/cart/checkout", ensureLoggedIn, ordersCtrl.checkout);
router.post("/cart/item/:id", ensureLoggedIn, ordersCtrl.addToCart);
router.put("/cart/qty", ensureLoggedIn, ordersCtrl.changeQty);

module.exports = router;
