const { CartServices } = require("../services");

const addProductToCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const newProduct = req.body
    const result = await CartServices.addProduct({cartId,...newProduct});
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      message: "Something is wrong",
      errorContent: error,
    });
  }
};

module.exports = { addProductToCart };