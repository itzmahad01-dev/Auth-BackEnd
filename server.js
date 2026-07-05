import dotenv from "dotenv";
dotenv.config();

import { app } from "./src/app.js";
import { connectDb } from "./src/config/db.js";
import dns from "dns";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const PORT = process.env.PORT || 5000;

await connectDb();

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});