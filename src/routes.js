const express = require("express");
const multer = require("multer");
const boxController = require("./controllers/BoxController");
const fileController = require("./controllers/FileController");
const multerConfig = require("./config/multer");
const router = express.Router();

router.post("/boxes", boxController.store);

router.get("/boxes/:id/show", boxController.show);


router.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  fileController.store
);

module.exports = router;
