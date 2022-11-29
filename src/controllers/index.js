const { userRegister } = require("./users.controllers")
const { userLogin } = require("./auth.controllers")
const { getAllProducts, createNewProduct } = require("./products.controllers")
const {addProductToCart, getProductsInCart} = require('./cart.controllers')

module.exports = {
    userRegister, userLogin, getAllProducts, createNewProduct, addProductToCart, getProductsInCart
}