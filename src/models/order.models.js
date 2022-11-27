const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define("order", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
    totalPrice: {
        type: DataTypes.FLOAT,
    },
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: "user_id"
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "pendiente"
    }
});

module.exports = Orders;
