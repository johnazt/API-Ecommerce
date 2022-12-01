const db = require("../utils/database");
const {
	Users,
	Products,
	Cart
} = require("../models");
const initModels = require("../models/initModels");

initModels();

const users = [
	{ username: "Eren Yeager", email: "eren@gmail.com", password: "1234" },
	{ username: "Levi Ackerman", email: "levi@gmail.com", password: "7777" },
	{ username: "Erwin Smith", email: "erwin@gmail.com", password: "3333" },
	{ username: "Armin Arlet", email: "armin@gmail.com", password: "4444" },
	{ username: "Reiner Braun", email: "reiner@gmail.com", password: "5555" },
	{ username: "Jean Kirschtein", email: "jean@gmail.com", password: "6666" },
	{ username: "Mikasa Ackerman", email: "mikasa@gmail.com", password: "7777" },
	{ username: "Historia Reiss", email: "historia@gmail.com", password: "8888" },
	{ username: "Hange Zoe", email: "hange@gmail.com", password: "9999" },
	{ username: "Falco Grice", email: "falco@gmail.com", password: "1111" }
];

const products = [
	{ name: "iPhone 13", price: "300", availableQty: 100, userId: 1 , image: ""},
	{ name: "Macbook Air 13", price: "500", availableQty: 200, userId: 1 , image: ""},
	{ name: "TV Samsung", price: "200", availableQty: 250, userId: 2 , image: ""},
	{ name: "Nintendo Switch", price: "200", availableQty: 50, userId: 2 , image: ""},
	{ name: "Audifonos Sony", price: "50", availableQty: 350, userId: 3 , image: ""}
];

const cart = [
	{ userId: 1, totalPrice: 1000 },
	{ userId: 2, totalPrice: 1000 },
	{ userId: 3, totalPrice: 1000 }
];

db.sync({ force: false }).then(() => {
	console.log("Sincronizado");
	users.forEach(async user => await Users.create(user));
	setTimeout(() => {
		products.forEach(async product => await Products.create(product));
	}, 100);
	setTimeout(() => {
		cart.forEach(async cartItem => await Cart.create(cartItem));
	}, 200);
});
