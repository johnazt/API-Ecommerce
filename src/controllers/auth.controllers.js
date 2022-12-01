const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);
    if (result) {
      const { id, username, email } = result.result;
      const userData = { id, username, email };
      const token = await AuthServices.getToken(userData);
      userData.token = token
      res.json({ ...userData});
    } else if (result === null) {
      res.status(400).json({
        message:
          "Invalid email or password",
      });
    } else {
      res.status(400).json({
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Missing data",
    });
  }
};

module.exports = { userLogin };