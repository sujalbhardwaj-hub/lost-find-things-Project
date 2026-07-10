import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    category: {
      type: String,
    },

    location: {
      type: String,
    },

    date: {
      type: String,
    },

    contact: {
      type: String,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Lost", "Found"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Item", itemSchema);