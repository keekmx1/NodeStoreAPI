import e, { Request, Response } from "express";
import connection from "../utils/db";
import multer from "multer";
import multerConfig from "../utils/multer_config";

const upload = multer(multerConfig.config).single(multerConfig.keyUpload);

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

// ----------------------------
// Create Products
// ----------------------------

function createProduct(req: Request, res: Response) {
  upload(req, res, async (error) => {
    if (error instanceof multer.MulterError) {
      res.json({
        status: "error",
        message: error,
      });
      return;
    } else {
      const image = req.file ? req.file.filename : null;

      try {
        // get data from request
        connection.execute(
          "INSERT INTO products (name, description, barcode, image, stock, price, category_id, user_id, status_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            req.body.name,
            req.body.description,
            req.body.barcode,
            image,
            req.body.stock,
            req.body.price,
            req.body.category_id,
            req.body.user_id,
            req.body.status_id,
          ],
          function (error: any, results: any) {
            if (error) {
              res.json({
                status: "error",
                message: error,
              });
              return;
            } else {
              res.json({
                status: "ok",
                message: "Product created successfully",
                product: {
                  id: results.insertId,
                  name: req.body.name,
                  description: req.body.description,
                  barcode: req.body.barcode,
                  image: req.body.image,
                  stock: req.body.stock,
                  price: req.body.price,
                  category_id: req.body.category_id,
                  user_id: req.body.user_id,
                  status_id: req.body.status_id,
                },
              });
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
  });
}

// ----------------------------
// Update Products
// ----------------------------

function updateProduct(req: Request, res: Response) {
  upload(req, res, async (error) => {
    if (error instanceof multer.MulterError) {
      res.json({
        status: "error",
        message: error,
      });
      return;
    } else {
      const image = req.file ? req.file.filename : null;
      try {
        connection.execute(
          "UPDATE products SET name = ?, description = ?, barcode = ?, image = ?, stock = ?, price = ?, category_id = ?, user_id = ?, status_id = ? WHERE id = ?",
          [
            req.body.name,
            req.body.description,
            req.body.barcode,
            image,
            req.body.stock,
            req.body.price,
            req.body.category_id,
            req.body.user_id,
            req.body.status_id,
            req.params.id,
          ],
          function (error: any, results: any) {
            if (error) {
              res.json({
                status: "error",
                message: error,
              });
              return;
            } else {
              res.json({
                status: "ok",
                message: "Product updated successfully",
              });
            }
          }
        );
      } catch (error) {
        res.json({
          status: "error",
          message: error,
        });
      }
    }
  });
}

// ----------------------------
// Delete Products
// ----------------------------

function deleteProduct(req: Request, res: Response) {
  try {
    connection.execute(
      "DELETE FROM products WHERE id = ?",
      [req.params.id],
      function (error: any, results: any) {
        if (error) {
          res.json({
            status: "error",
            message: error,
          });
          return;
        } else {
          res.json({ status: "ok", message: "Product deleted successfully" });
        }
      }
    );
  } catch (error) {
    res.json({
      status: "error",
      message: error,
    });
  }
}

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
