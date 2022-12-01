const { CartServices } = require("../services");
const afterBuyEmail = require('../templates/afterBuy');
const transporter = require("../utils/mailer")

const createUserCart = async (req, res, next) => {
  try {
    const { userId } = req.params
    const result = await CartServices.createCart({userId})
    res.json(result)
  } catch (error) {
    next({
      status: 400,
      message: "Something is wrong",
      errorContent: error,
    })
  }
}

const addProductToCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const newProduct = req.body
    const result = await CartServices.addProduct({cartId,...newProduct});
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      message: "Something is wrong",
      errorContent: error,
    });
  }
};

const getProductsInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const result = await CartServices.getProducts(cartId);
    res.json(result)
  } catch (error) {
    next({
      status: 400,
      message: "missing data",
      errorContent: error
    })
  }
}

const buyProductsInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const dataUser = req.body
    const result = await CartServices.buyCart(cartId)
    res.json(result)
    transporter.sendMail({
			from: "<john.azt.data@gmail.com>",
			to: dataUser.email,
			subject: `Thanks for your buy ${dataUser.username}!` ,
			text: `Hi ${dataUser.username}!
      Welcome to Ecommerce API, here you can manage your products and users in the best way.`,
			html: afterBuyEmail(dataUser.username)
		});
  } catch (error) {
    next({
      status: 400,
      message: "Something is wrong",
      errorContent: error
    })
  }
}

module.exports = { addProductToCart, getProductsInCart, buyProductsInCart, createUserCart };