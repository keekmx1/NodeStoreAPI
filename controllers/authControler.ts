import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import connection from "../utils/db";

// define interface for User
interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

// Register function
async function register(req: Request, res: Response): Promise<void> {
  // get data from request
  const { firstname, lastname, email, password }: User = req.body;

  // check if user already exists
  try {
    connection.execute(
      "Select * from users where email = ?",
      [email],
      function (error: any, results: any, fields: any) {
        
      }
    );
  } catch (error) {
    console.log("Error registering user: ", error);
    res.sendStatus(500);
  }
}
