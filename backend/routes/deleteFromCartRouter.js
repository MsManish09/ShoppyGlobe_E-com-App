

import { deleteFromCart } from '../controllers/deleteFromCart.js';
import express from 'express';


const deleteFromCartRouter = express.Router()

// POST /add to cart route
deleteFromCartRouter.delete('/', deleteFromCart);

export default deleteFromCartRouter;