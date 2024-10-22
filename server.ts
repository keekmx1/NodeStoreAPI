import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connection from "./utils/db";


// Initailize dotenv
dotenv.config();

// Craete Exprees Instant
const app: Express = express();

// Create URl Rounting
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is TypeScript nodejs project");
});

// Test Connection Database MySQL
app.get('/testdb', (req:Request, res:Response) => {
  connection.connect((error: Error | unknown) => {
      if(error){
          res.send(`Error connecting to database: ${error}`)
      } else {
          res.send('Database is connected successfully')
      }
  })
})

// Start Server on port 3000
const port: string | number = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
