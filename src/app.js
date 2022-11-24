const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

db
	.authenticate()
	.then(() => console.log("Successful Authentication"))
	.catch(error => console.log(error));

db
	.sync({ force: true })
	.then(() => console.log("Database is sincronized"))
	.catch(error => console.log(error));

app.get("/", (req, res) => {
	console.log("Welcome to the server");
});
app.use(handleError);
module.exports = app;
