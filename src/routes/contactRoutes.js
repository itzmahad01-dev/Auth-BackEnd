import express from "express";
import { contact, getAllMessages } from "../controllers/contactController.js";

const contactRoutes = express.Router();

contactRoutes.post("/contact", contact);
contactRoutes.get("/messages", getAllMessages);

export default contactRoutes;