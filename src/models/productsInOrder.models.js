const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductsInOrder = db.define(
	"productsInOrder",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "order_id"
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
			type: DataTypes.STRING,
			defaultValue: ""
		}
	},
	{
		timestamps: false
	}
);

module.exports = ProductsInOrder;
