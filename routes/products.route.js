import express from "express"
import {getAllProducts, createProduct, addToCart  } from "../controllers/product.controller.js"

const router = express.Router();

router.get("/product", getAllProducts)
router.get('/createproduct', createProduct);    
router.get('/addtocart', addToCart);

export default router;
