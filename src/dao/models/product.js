import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true, max: 100 },
  stock: { type: Number, required: true },
  code: { type: Number, required: true },
  category: { type: String, required: true, max: 100 },
});

export const productModel = mongoose.model(productCollection, productSchema);
