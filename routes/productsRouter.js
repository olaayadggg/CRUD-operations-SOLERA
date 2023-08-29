const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/product.js')


// all routes
productRouter.post("/add", productController.addProduct);
productRouter.delete("/delete/:id", productController.deleteProduct);
productRouter.get("/getAll", productController.getAllProducts);
productRouter.get("/get/:id", productController.getProductById);
productRouter.put("/update/:id", productController.updateProduct);


module.exports = productRouter;