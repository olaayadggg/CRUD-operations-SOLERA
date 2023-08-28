const ProductsModel = require("../models/products");



const addProduct = async (req,res,next)=>{
    const { name, price, category } = req.body;
    try {
        const product = new ProductsModel({
            name: name,
            price: price,
            category: category,
          });
      
          await product.save();
          res.send[(product),"Product added successfully"];
    } catch (error) {
        return next(error);
    }
}



const updateProduct = async (req, res, next)=>{
    const productId = req.params.id;
    const updateData = req.body;
    try {
        const updatedProduct = await ProductsModel.findByIdAndUpdate(productId, updateData,{new: true});
        res.send[(updatedProduct),"Product updated successfully"];
    } catch (error) {
        return next(error);
    }
}


const getProductById = async (req, res, next)=>{
    const id = req.params.id;
    try {
        const products = await ProductsModel.findOne({_id: id});
        return res.json({status: true, data: products});
    } catch (error) {
        return next(error);
    }

}

const getAllProducts = async (req, res, next) => {
    try {
      const products = await ProductsModel.find();
      return res.json({ status: true, products });
    } catch (err) {
      return next(err);
    }
  };

  const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
      await ProductsModel.deleteOne({ _id: id });
      return res.json({ status: true },"product deleted successfully");
    } catch (err) {
      return next(err);
    }
  };

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct,
};
