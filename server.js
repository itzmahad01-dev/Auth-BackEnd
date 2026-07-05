import dotenv from "dotenv";
dotenv.config();

import { app } from "./src/app.js";
import { connectDb } from "./src/config/db.js";
import dns from "dns";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);


await connectDb();

