const { OrderServices } = require("../services");

const getUserOrders  = async (req, res, next) => {
	try {
		const {userId} = req.params
        const result = await OrderServices.getOrder(userId)
        res.json(result)
	} catch (error) {
		next({
			status: 400,
			message: "Something is wrong",
			errorContent: error
		});
	}
};


module.exports = {getUserOrders}