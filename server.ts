import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connection from "./utils/db";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import productRoute from "./routes/productRoute";


// Initailize dotenv
dotenv.config();

// Craete Exprees Instant
const app: Express = express();

// parse incoming json request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create URl Rounting
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoute);

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
