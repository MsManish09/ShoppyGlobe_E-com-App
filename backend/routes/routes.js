
// add all routes here

import express from 'express';
import { fetchProducts } from '../controllers/productsController.js';
import { fetchProductsByID } from '../controllers/productsById.js';

const router = express.Router();

// GET /api/products  (use API prefix if you like)
router.get('/', fetchProducts);
router.get('/:id', fetchProductsByID)

export default router;