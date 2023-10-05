import { Router } from "express";

const router = Router();
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from "../controllers/products.controller.js";

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:productId', getProductById);

router.patch('/:productId', updateProductById);

router.delete('/:productId', deleteProductById);

export default router;