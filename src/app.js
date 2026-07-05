import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"


export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", contactRoutes);


app.get("/",(req, res) => {
    res.send("Hello from the server!")
})

