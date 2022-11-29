const {ProductsInCart} = require('../models')

class CartServices {
  static async addProduct (newProduct) {
    try {
      const result = await ProductsInCart.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices