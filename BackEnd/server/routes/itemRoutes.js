import express from "express";

import {
  getItems,
  createItem,
  deleteItem,
} from "../controllers/itemController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", getItems);

router.post("/:id", createItem);

router.delete("/:id", deleteItem);

export default router;