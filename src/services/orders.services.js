const { Orders } = require("../models")


class OrderServices {
    static async getOrder (userId) {
        try {
            const result = await Orders.findAll({
                where: { userId },
                attributes: {
                    exclude: ["user_id"]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = OrderServices