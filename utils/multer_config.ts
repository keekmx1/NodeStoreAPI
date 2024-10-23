import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination(
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) {
    const path = "./uploads/images";
    // Create directory if it doesn't exist
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    callback(null, path);
  },

  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});
