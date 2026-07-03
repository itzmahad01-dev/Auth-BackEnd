import express from "express"
import { getallusers} from "../controllers/userController.js"


const userRoutes = express.Router()



userRoutes.get("/", getallusers)


export default userRoutes