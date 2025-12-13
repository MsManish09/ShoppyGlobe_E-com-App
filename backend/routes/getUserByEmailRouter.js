import { getUser } from "../controllers/getUserByEmail.js";
import express from 'express';

export const getuserRouter = express.Router()

getuserRouter.post("/", getUser);
