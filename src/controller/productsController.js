const ProductsModel = require("../model/products.model");

exports.createProduct = async (req, res) => {
  try {
    const {
      productName,
      productCode,
      productImg,
      unitPrice,
      quantity,
      totalPrice,
    } = req.body;

    const newProduct = await ProductsModel.create(req.body);

    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.getAllProduct = async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductsModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productName,
      productCode,
      productImg,
      unitPrice,
      quantity,
      totalPrice,
    } = req.body;

    const updatedProduct = await ProductsModel.findByIdAndUpdate(
      id,
      {
        productName,
        productCode,
        productImg,
        unitPrice,
        quantity,
        totalPrice,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await ProductsModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
