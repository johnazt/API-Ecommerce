const {ProductsInCart, Products} = require('../models')

class CartServices {
  static async addProduct (newProduct) {
    try {
      const result = await ProductsInCart.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProducts (cartId) {
    try {
      const result = await ProductsInCart.findAll({
        where: { cartId },
        attributes: ["cartId", "quantity"],
        include: {
          model: Products,
          as: "product",
          attributes:["name", "price", "status"]
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CartServices