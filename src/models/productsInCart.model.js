const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductsInCart = db.define(
	"productsInCart",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		cartId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "cart_id"
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "product_id"
		},
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: 0,
			validate: {
				min: 0
			}
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: 0,
			validate: {
				min: 0
			}
		},
		status: {
			type: DataTypes.ENUM("pending", "purchased"),
			defaultValue: "pending"
		}
	},
	{
		timestamps: false
	}
);

module.exports = ProductsInCart;
