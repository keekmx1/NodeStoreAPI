import express, { Express, Request, Response } from "express";

// Craete Exprees Instant
const app: Express = express();

// Create URl Rounting
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is TypeScript nodejs project");
});

// Start Server on port 3000
const port: number = 3000;
app.listen(port, () => {
  console.log("Server running on http://localhost:3000");
});
