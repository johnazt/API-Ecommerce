const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define(
	"order",
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
			defaultValue: 0,
			validate: {
				min: 0
			}
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "user_id"
		},
		status: {
			type: DataTypes.ENUM("complete", "pending"),
			defaultValue: "pending"
		}
	},
	{
		timestamps: false
	}
);

module.exports = Orders;
