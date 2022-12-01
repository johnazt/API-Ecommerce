const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 *@openapi
 *components:
 *    schemas:
 *     orders:
 *       type: object
 *       properties:
 *             id: 
 *                type: integer
 *                example: 1
 *             totalPrice:
 *                type: integer
 *                example: 1000
 *             userId: 
 *                type: integer
 *                example: 1
 *             status: 
 *                type: string
 *                example: "pending"
 *securitySchemes:
 *     bearerAuth: 
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Orders = db.define(
	"orders",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		totalPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
			field: "total_price",
			defaultValue: 0
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "user_id"
		},
		status: {
			type: DataTypes.ENUM("completed", "pending"),
			defaultValue: "completed"
		}
	},
);

module.exports = Orders;
