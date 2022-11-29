const { userRegister } = require("./users.controllers")
const { userLogin } = require("./auth.controllers")
const { getAllProducts, createNewProduct } = require("./products.controllers")
const {addProductToCart} = require('./cart.controllers')

module.exports = {
    userRegister, userLogin, getAllProducts, createNewProduct, addProductToCart
}