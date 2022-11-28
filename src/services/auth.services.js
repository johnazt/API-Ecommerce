const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class AuthServices {
  static async authenticate(credentials) {
    try {
        const { email, password } = credentials;
      const result = await Users.findOne({
        where: { email },
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static async getToken(userData) {
    try {
      const token = jwt.sign(userData, process.env.SECRET, {
        expiresIn: "1h",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;