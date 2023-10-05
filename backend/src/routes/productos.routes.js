import { Router } from "express";

const router = Router();
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/index.js";

router.post("/", verifyToken, createProduct);

router.get("/", verifyToken, getProducts);

router.get("/:productId",verifyToken, getProductById);

router.patch("/:productId", verifyToken, updateProductById);

router.delete("/:productId", verifyToken, deleteProductById);

export default router;
