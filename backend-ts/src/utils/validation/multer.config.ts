import multer from "multer";
import * as path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "text/csv") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file extension: " + file.mimetype));
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
