import Item from "../models/Item.js";

// GET ALL ITEMS
export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ADD ITEM
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);

    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE ITEM
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};