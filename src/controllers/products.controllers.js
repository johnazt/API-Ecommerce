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

// const createNewProduct = async (req, res, next) => {
//   try {
//     const newProduct = req.body;
//     const result = await ProductServices.create(newProduct);
//     res.status(201).json({ message: "New product was created succesfuly" });
//   } catch (error) {
//     next({
//       status: 400,
//       errorContent: error,
//       message: "Oops, something went wrong, verify the submitted data",
//     });
//   }
// };

module.exports = { getAllProducts };