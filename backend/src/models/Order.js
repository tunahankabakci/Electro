const mongoose = require("mongoose");
const Product = require("./Product").schema;

const orderSchema = mongoose.Schema({
  products: [
    {
      type: Product,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", orderSchema,"orders");
module.exports = Order;
