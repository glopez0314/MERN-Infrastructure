const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = require("./ProductSchema");

const lineItemSchema = new Schema(
  {
    qty: { type: Number, default: 1 },
    item: productSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

lineItemSchema.virtual("extPrice").get(function () {
  return this.qty * this.item.price;
});

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

orderSchema.virtual("orderTotal").get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual("orderQty").get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function (itemId) {
  const cart = this;
  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemId)
  );
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const Item = mongoose.model("Product");
    const item = await Item.findById(itemId);
    cart.lineItems.push({ item });
  }
  return cart.save();
};

orderSchema.methods.changeItemQty = function (itemId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemId)
  );
  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model("Order", orderSchema);
