const { Products, Users } = require("../models");

class ProductsServices {
  static async getProducts() {
    try {
      const result = await Products.findAll({
        attributes: ["id","name","price", "availableQty"],
        include: {
          model: Users,
          as: "user",
          attributes: ["username"]
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(newProduct) {
    try {
      const result = await Products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;