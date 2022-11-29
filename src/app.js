const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error.middleware");
const { userRoutes, authRoutes, productRoutes } = require("./routes")
const transporter = require('./utils/mailer');

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels()

db
	.authenticate()
	.then(() => console.log("Successful Authentication"))
	.catch(error => console.log(error));

db
	.sync({ force: false})
	.then(() => console.log("Database is sincronized"))
	.catch(error => console.log(error));

transporter.verify()
	.then(() => console.log('Nodemailer is ready'));

app.get("/", (req, res) => {
	console.log("Welcome to the server");
});

app.use("/api/v1", userRoutes)
app.use("/api/v1", authRoutes)
app.use("/api/v1", productRoutes)

app.use(handleError);
module.exports = app;
