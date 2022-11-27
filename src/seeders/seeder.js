const db = require("../utils/database");
const { Users, Products, Cart, Orders, ProductsInCart, ProductsInOrder } = require("../models");
const initModels = require("../models/initModels");

initModels();

const users = [
	{ username: "Eren Yaeger", email: "eren@gmail.com", password: "1234" },
	{ username: "Levi Ackerman", email: "levi@gmail.com", password: "7777" },
	{ username: "Erwin Smith", email: "erwin@gmail.com", password: "3333" }
];

const products = [
	{ name: "iPhone 13", price: "300", availableQty: 100, userId: 1 },
	{ name: "Macbook Air 13", price: "500", availableQty: 200, userId: 1 },
	{ name: "TV Samsung", price: "200", availableQty: 250, userId: 2 },
	{ name: "Nintendo Switch", price: "200", availableQty: 50, userId: 2 },
	{ name: "Audifonos Sony", price: "50", availableQty: 350, userId: 3 }
];

const cart = [{ userId: 1 }, { userId: 2 }, { userId: 1 }];

const order = [
	{ userId: 1, status: "completed" },
	{ userId: 2, status: "completed" },
	{ userId: 3, status: "pendiente" }
];

const productsInCart = [
    { cartId: 1, productId: 1, quantity: 3, price: 200}
]

const productsInOrder = [
    { orderId: 1, productId: 1, quantity: 3, price: 200},
    { orderId: 1, productId: 2, quantity: 1, price: 400},
    { orderId: 1, productId: 4, quantity: 1, price: 400}
]

db.sync({ force: false }).then(() => {
	console.log("Sincronizado");
	users.forEach(async user => await Users.create(user));
	setTimeout(() => {
		products.forEach(async product => await Products.create(product));
	}, 100);
	setTimeout(() => {
		cart.forEach(async cartItem => await Cart.create(cartItem));
	}, 200);
	setTimeout(() => {
		order.forEach(async orderItem => await Orders.create(orderItem));
	}, 300);
	setTimeout(() => {
		productsInCart.forEach(async pic => await ProductsInCart.create(pic));
	}, 400);
	setTimeout(() => {
		productsInOrder.forEach(async pio => await ProductsInOrder.create(pio));
	}, 400);
});
