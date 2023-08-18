const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProduct,
  getOneProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productsController");

router.post("/getAll", getAllProduct);
router.post("/create", createProduct);
router.post("/getOne/:id", getOneProduct);
router.post("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);


module.exports = router;