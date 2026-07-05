import {app} from "./src/app.js"
import { connectDb } from "./src/config/db.js"
import dotenv from "dotenv"
import dns from "dns";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

dotenv.config()

// const PORT = process.env.PORT || 5000



await connectDb()



export default app
