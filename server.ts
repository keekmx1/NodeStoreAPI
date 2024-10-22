import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Initailize dotenv
dotenv.config();

// Craete Exprees Instant
const app: Express = express();

// Create URl Rounting
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is TypeScript nodejs project");
});

// Test Connection Database MySQL
app.get("/testdb", (req: Request, res: Response) => {
  res.send("");
});

// Start Server on port 3000
const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
