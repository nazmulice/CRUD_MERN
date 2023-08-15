const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    productCode: {
      type: String,
    },
    productImg: {
      type: String,
    },
    unitPrice: {
      type: String,
      require: true,
    },
    quantity: {
      type: String,
    },
    totalPrice: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically `createdAt` and `updatedAt`
    versionKey: false,
  }
);

const ProductsModel = mongoose.model("products", productSchema);
module.exports = ProductsModel;



// Import the necessary Mongoose library.

// Define a Mongoose schema named OrderSchema with the following fields:

// customerName (String, required)

// products (Array of Objects, each with fields productId (String) and quantity (Number))

// totalPrice (Number, required)

// orderDate (Date, default value: current date and time)

// Create a Mongoose model named Order using the defined schema.

// Export the Order model to make it accessible in other parts of your application.
