const app = require("./app");
const swaggerDocs = require("../swagger");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
	console.log(`Server is running in PORT:${PORT}`);
	swaggerDocs(app, PORT);
});

module.exports = server
