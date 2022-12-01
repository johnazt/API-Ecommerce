const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 *@openapi
 *components:
 *    schemas:
 *     getProducts: 
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: iPhone13
 *         availableQty:
 *           type: integer
 *           example: 100
 *         price:
 *           type: integer
 *           example: 300
 *         image: 
 *           type: string
 *           example: https://images.lider.cl/wmtcl?source=url[file:/productos/1142536a.jpg]&sink
 *         user: 
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               example: Juan Perez
 *     product:
 *       type: object
 *       properties:
 *           name: 
 *             type: string
 *             example: Macbook Pro
 *           price: 
 *             type: integer
 *             example: 2000
 *           availableQty:
 *             type: integer
 *             example: 100
 *           userId:
 *             type: integer
 *             example: 1
 *           image: 
 *             type: string
 *             example: https://images.lider.cl/wmtcl?source=url[file:/productos/1142536a.jpg]&sink
 *     productResponse:
 *       type: object
 *       properties:
 *           status:
 *             type: string
 *             example: in stock
 *           id:
 *             type: integer
 *             example: 1
 *           name: 
 *             type: string
 *             example: Macbook Air
 *           price: 
 *             type: integer
 *             example: 2000
 *           availableQty:
 *             type: integer
 *             example: 100
 *           userId:
 *             type: integer
 *             example: 1
 *           image: 
 *             type: string
 *             example: https://images.lider.cl/wmtcl?source=url[file:/productos/1142536a.jpg]&sink
 *securitySchemes:
 *     bearerAuth: 
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


const Products = db.define(
	"products",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		availableQty: {
			type: DataTypes.INTEGER
		},
		status: {
			type: DataTypes.ENUM("In Stock", "Not in Stock"),
			defaultValue: "In Stock"
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "user_id"
		},
		image: {
			type: DataTypes.STRING,
		}
	},
	{
		timestamps: false
	}
);

module.exports = Products;
