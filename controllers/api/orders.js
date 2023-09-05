const Order = require("../../models/Order");
const user = require("../../models/user");

module.exports = {
  history,
  cart,
  addToCart,
  changeQty,
  checkout,
};

async function history(req, res) {
  const orders = await Order.find({ user: req.user._id, isPaid: true }).sort(
    "-updatedAt"
  );
  res.json(orders);
}

async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  } catch (err) {
    console.log(err);
  }
}

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

async function changeQty(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.changeItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
