const { Router } = require("express");
const router = Router();
const { getAllProducts } = require("../controllers");
const { authenticate } = require("../middlewares");

router.get("/products", authenticate, getAllProducts);

// router.post("/products", authenticate, createNewProduct);

module.exports = router;