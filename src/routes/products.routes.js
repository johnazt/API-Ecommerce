const { Router } = require("express");
const { getAllProducts, createNewProduct } = require("../controllers");
const { authenticate } = require("../middlewares");

// GET ALL PRODUCTS
/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     security:
*        - bearerAuth: []
 *     summary: Obtiene todos los productos con su respectivo usuario
 *     tags: [Products]
 *     responses:
 *        200:
 *          description: OK
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                          status:
 *                            type: string
 *                            example: OK
 *                          data:
 *                            type: array
 *                            items: 
 *                              $ref: "#/components/schemas/getProducts"
 */

// CREATE A NEW PRODUCT
/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     security:
*        - bearerAuth: []
 *     summary: Crea un nuevo producto
 *     tags: [Products]
 *     requestBody: 
 *          description: You need a name, availableQty, price and userId to create a new product
 *          required: true
 *          content: 
 *            application/json:
 *              schema:
 *                  $ref: "#/components/schemas/product"
 *     responses:
 *        200:
 *          description: created
 *          content:
 *              application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                          status:
 *                            type: string
 *                            example: OK
 *                          data:
 *                              $ref: "#/components/schemas/productResponse"
 */

const router = Router();
router.get("/products", authenticate, getAllProducts);
router.post("/products", authenticate, createNewProduct)

module.exports = router;
