const { UserServices } = require("../services");
const welcomeTemplate = require("../templates/welcome");
const transporter = require("../utils/mailer");

const userRegister = async (req, res, next) => {
	try {
		const newUser = req.body;
		const result = await UserServices.create(newUser);
		res.status(201).json(result);
		// Here we send emails
		transporter.sendMail({
			from: "<john.azt.data@gmail.com>",
			to: result.email,
			subject: "Welcome to Ecommerce API",
			text: `Hi ${result.username}!
      Welcome to Ecommerce API, here you can manage your products and users in the best way.`,
			html: welcomeTemplate(result.username)
		});
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Faltan datos"
		});
	}
};

const getAllUsers = async (req, res, next) => {
	try {
		const result = await UserServices.getUsers();
		res.json(result);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Faltan datos"
		});
	}
};

module.exports = {
	userRegister,
	getAllUsers
};
