const Users = require("./users.models");
const Products = require("./products.models")
const Cart = require("./cart.models")
const Orders = require("./order.models.js")
const ProductsInCart = require('./productsInCart.model')
const ProductsInOrder = require('./productsInOrder.models')

module.exports = {
    Users,
    Products,
    Cart,
    Orders,
    ProductsInCart,
    ProductsInOrder
}