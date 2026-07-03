import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);



app.get("/",(req, res) => {
    res.send("Hello from the server!")
})

