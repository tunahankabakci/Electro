const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  productCategory: {
    type: String,
    required: true,
    trim: true,
  },
  productPriceFirst: {
    type: String,
    required: true,
    trim: true,
  },
  productPriceLast: {
    type: String,
    required: true,
    trim: true,
  },
  productQty: {
    type: Number,
    required: true,
    trim: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productBrand: {
    type: String,
    required: true,
    trim:true
  },
  productImgUrl: [
    {
      type: String,
      required: true,
    },
  ],
});

const Product = mongoose.model("Product", productSchema,'products');
module.exports = Product;
