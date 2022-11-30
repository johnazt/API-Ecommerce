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
 *     newCartUser:
 *       type: object
 *       properties:
 *           userId: 
 *             type: integer
 *             example: 1
 *     buyCart:
 *       type: object
 *       properties:
 *           username: 
 *             type: string
 *             example: Juan Perez
 *           email: 
 *             type: string
 *             example: juan@gmail.com
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
		defaultValue: 0,
		field: "total_price",
	  },
});

module.exports = Cart;
