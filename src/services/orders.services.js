const { Orders } = require("../models")


class OrderServices {
    static async createOrder (userId) {
        try {
            const result = await Orders.create(userId)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = OrderServices