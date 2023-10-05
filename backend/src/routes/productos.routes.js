import { Router } from "express";

const router = Router();
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductsMen,
  getProductsWoman,
  getProductsChildBoy,
  getProductsChildGirl
} from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/index.js";

router.post("/", verifyToken, createProduct);

router.get("/", verifyToken, getProducts);

router.get("/:productId",verifyToken, getProductById);

router.patch("/:productId", verifyToken, updateProductById);

router.delete("/:productId", verifyToken, deleteProductById);

router.post("/men-products", verifyToken, getProductsMen);

router.post("/woman-products", verifyToken, getProductsWoman);

router.post("/boy-products", verifyToken, getProductsChildBoy);

router.post("/girl-products", verifyToken, getProductsChildGirl);

export default router;
