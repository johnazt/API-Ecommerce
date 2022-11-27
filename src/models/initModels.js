const {
	Users,
	Products,
	Cart,
	Orders,
	ProductsInCart,
	ProductsInOrder
} = require("./index");

const initModels = () => {
	// Un usuario puede tener muchos productos, y un producto le pertenece a un usuario
	Products.belongsTo(Users, { as: "user", foreignKey: "user_id" });
	Users.hasMany(Products, { as: "products", foreignKey: "user_id" });

	//Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario
	Users.hasOne(Cart, { as: "cart", foreignKey: "user_id" });
	Cart.belongsTo(Users, { as: "user", foreignKey: "user_id" });

	//Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario
	Orders.belongsTo(Users, { as: "user", foreignKey: "user_id" });
	Users.hasMany(Orders, { as: "order", foreignKey: "user_id" });

	//Un carrito tiene muchos ProductInCart
	ProductsInCart.belongsTo(Cart, { as: "cart", foreignKey: "cart_id" });
	Cart.hasMany(ProductsInCart, { as: "productsInCart", foreignKey: "cart_id" });

	//Un ProductInCart puede tener un producto y pertenece a un carrito
	Products.belongsTo(ProductsInCart, {
		as: "productsInCart",
		foreignKey: "product_id"
	});
	ProductsInCart.hasMany(Products, {
		as: "products",
		foreignKey: "product_id"
	});

	//Una orden tiene muchos ProductInOrder
	ProductsInOrder.belongsTo(Orders, { as: "order", foreignKey: "order_id" });
	Orders.hasMany(ProductsInOrder, {
		as: "productsInOrder",
		foreignKey: "order_id"
	});

	//Un ProductInOrder tiene un producto y pertenece a una orden
	Products.belongsTo(ProductsInOrder, {
		as: "productsInOrder",
		foreignKey: "product_id"
	});
	ProductsInOrder.hasMany(Products, {
		as: "products",
		foreignKey: "product_id"
	});
};

module.exports = initModels;
