const { OrderServices } = require("../services");

const createNewOrder = async (req, res, next) => {
    try {
        const newOrder  = req.body;
        const result = await OrderServices.createOrder(newOrder )
        res.json(result)
	} catch (error) {
		next({
			status: 400,
			message: "Something is wrong",
			errorContent: error
		});
	}
};


module.exports = {createNewOrder}