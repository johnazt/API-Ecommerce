const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 *@openapi
 *components:
 *    schemas:
 *     productToCart:
 *       type: object
 *       properties:
 *           productId: 
 *             type: integer
 *             example: 1
 *           quantity:
 *             type: integer
 *             example: 2
 *           price: 
 *             type: integer
 *             example: 1000
 *securitySchemes:
 *     bearerAuth: 
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


const Cart = db.define("cart", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: "user_id"
    },
    totalPrice: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: "total_price",
	  },
});

module.exports = Cart;
