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
 *     productToCartResponses:
 *       type: object
 *       properties:
 *           price:
 *             type: integer
 *             example: 500
 *           status: 
 *             type: string
 *             example: "pending"
 *           cartId: 
 *             type: integer
 *             example: 2
 *           productId: 
 *             type: integer
 *             example: 1
 *           quantity:
 *             type: integer
 *             example: 2
 *     newCartUser:
 *       type: object
 *       properties:
 *               id: 
 *                 type: integer
 *                 example: 1
 *               userId: 
 *                 type: integer
 *                 example: 1
 *               updatedAt:
 *                 type: string
 *                 example: "2022-12-01T14:32:33.124Z"
 *               createdAt:
 *                 type: string
 *                 example: "2022-12-01T14:32:33.124Z"
 *     getProductResponse: 
 *       type: array
 *       items:
 *         type: object
 *         properties:  
 *               cartId:
 *                type: integer
 *                example: 2
 *               quantity: 
 *                type: integer
 *                example: 100
 *               status: 
 *                type: string
 *                example: "pending"
 *               cart: 
 *                type: object
 *                properties: 
 *                  userId: 
 *                    type: integer
 *                    example: 3
 *                  buyer: 
 *                    type: object
 *                    properties: 
 *                          username: 
 *                               type: string
 *                               example: "John Asto"
 *               product: 
 *                    type: object
 *                    properties: 
 *                           name: 
 *                              type: string
 *                              example: "Macbook Pro"
 *                           price:
 *                              type: integer
 *                              example: 100
 *                           status: 
 *                               type: string
 *                               example: "In Stock"
 *     sendUserData:
 *       type: object
 *       properties:
 *           username: 
 *             type: string
 *             example: Juan Perez
 *           email: 
 *             type: string
 *             example: juan@gmail.com
 *     buyResponse:
 *       type: object
 *       properties:
 *            order:
 *               type: object
 *               properties:
 *                   totalPrice:
 *                        type: integer
 *                        example: 500
 *                   status: 
 *                        type: string
 *                        example: "pending"
 *                   id:
 *                    type: integer
 *                    example: 2
 *                   userId:
 *                    type: integer
 *                    example: 1
 *            message: 
 *               type: string
 *               example: "the cart has been purchased"      
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
