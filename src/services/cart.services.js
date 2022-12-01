const { ProductsInCart, Products, Cart, Users, Orders } = require("../models");

class CartServices {
	static async createCart(newCart) {
		try {
			const result = await Cart.create(newCart);
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async addProduct(newProduct) {
		try {
			const result = await ProductsInCart.create(newProduct);
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async getProducts(cartId) {
		try {
			const result = await ProductsInCart.findAll({
				where: { cartId },
				attributes: ["cartId", "quantity", "status"],
				include: [
					{
						model: Cart,
						as: "cart",
						attributes: ["userId"],
						include: {
							model: Users,
							as: "buyer",
							attributes: ["username"]
						}
					},
					{
						model: Products,
						as: "product",
						attributes: ["name", "price", "status"]
					}
				]
			});
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async buyCart(cartId, userId) {
		try {
			const result = await ProductsInCart.update(
				{ status: "purchased" },
				{ where: { cartId } }
			);
			const order = await Orders.create({ userId });
			return order;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = CartServices;
