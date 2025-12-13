
import { addToCart } from '../controllers/addToCart.js';
import express from 'express';


const addToCartRouter = express.Router()

// POST /add to cart route
addToCartRouter.post('/', addToCart);

export default addToCartRouter;