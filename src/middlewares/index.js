const authenticate = require("./auth.middleware")
const handleError = require("./error.middleware")

module.exports = {
    authenticate, handleError
}