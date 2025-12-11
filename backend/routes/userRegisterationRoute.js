import { signup } from "../controllers/userRegister.js";
import express from 'express';


const registrationRouter = express.Router()

// POST /signup route
registrationRouter.post('/', signup);

export default registrationRouter;