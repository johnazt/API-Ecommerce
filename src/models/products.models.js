const db = require("../utils/database");
const { DataTypes } = require("sequelize");

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
			type: DataTypes.STRING,
			defaultValue: "in stock"
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: "user_id"
		}
	},
	{
		timestamps: false,
	}
);

module.exports = Products;
