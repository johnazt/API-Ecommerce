const { ProductServices } = require("../services");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await ProductServices.getProducts();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      message: "Something is wrong",
      errorContent: error,
    });
  }
};

const createNewProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.createProduct(newProduct);
    res.json(result)
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "missing data",
    });
  }
};

module.exports = { getAllProducts , createNewProduct};