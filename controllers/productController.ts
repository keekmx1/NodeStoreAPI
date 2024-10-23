import e, { Request, Response } from "express";
import connection from "../utils/db";

// ----------------------------
// Get All Products
// ----------------------------
function getAllProducts(req: Request, res: Response) {
  try {
    connection.execute(
      "SELECT * FROM products ORDER BY id DESC",
      function (error: any, results: any) {
        if (error) {
          res.json({
            status: "error",
            message: error,
          });
          return;
        } else {
          res.json(results);
        }
      }
    );
  } catch (error) {
    res.json({
      status: "error",
      message: error,
    });
    return;
  }
}

// ----------------------------
// Get Product by ID
// ----------------------------
function getProductById(req: Request, res: Response) {
  try {
    connection.execute(
      "SELECT * FROM products WHERE id = ?",
      [req.params.id],
      function (error: any, results: any) {
        if (error) {
          res.json({
            status: "error",
            message: error,
          });
          return;
        } else {
          res.json(results);
        }
      }
    );
  } catch (error) {
    res.json({
      status: "error",
      message: error,
    });
    return;
  }
}
export { getAllProducts, getProductById };
