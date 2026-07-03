import express from "express";
import signup, { login } from "../controllers/authController.js";
import { getallusers } from "../controllers/userController.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);


export default authRoutes;