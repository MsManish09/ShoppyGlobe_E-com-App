
import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true, min: 0, max: 5 },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }, // is date is empty, assign date when the document was saved in mongodb
    reviewerName: { type: String, required: true },
    reviewerEmail: { type: String, required: true}
  },
  { _id: false } // prevents Mongoose from adding automatic _id to the reviews
)

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true, // prevents prevent duplication.
    },
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
    dimensions: {
      width: Number,
      height: Number,
      depth: Number
    },
    reviews: {
      type: [reviewsSchema],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
