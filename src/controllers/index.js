const { userRegister, getAllUsers } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { getAllProducts, createNewProduct } = require("./products.controllers");
const {
	addProductToCart,
	getProductsInCart,
	buyProductsInCart,
	createUserCart
} = require("./cart.controllers");
const { createNewOrder} = require("./orders.controllers")

module.exports = {
	userRegister,
	getAllUsers,
	userLogin,
	getAllProducts,
	createNewProduct,
	addProductToCart,
	getProductsInCart,
	buyProductsInCart,
	createUserCart,
	createNewOrder
};
