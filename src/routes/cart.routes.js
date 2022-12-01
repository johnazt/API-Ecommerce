const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { addProductToCart, getProductsInCart, buyProductsInCart, createUserCart } = require("../controllers");

/**
 * @openapi
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
*        - bearerAuth: []
 *     summary: Crea un nuevo carrito de compras
 *     tags: [Shopping Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           description: userId
 *     responses:
 *        200:
 *          description: added
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
 *                              $ref: "#/components/schemas/newCartUser"
 */

/**
 * @openapi
 * /api/v1/cart/{cartId}/addproduct:
 *   post:
 *     security:
*        - bearerAuth: []
 *     summary: Añade un nuevo producto al carrito
 *     tags: [Shopping Cart]
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           description: cartId
 *     requestBody: 
 *          description: You need a productId, quantity and price to add a product in the cart
 *          required: true
 *          content: 
 *            application/json:
 *              schema:
 *                  $ref: "#/components/schemas/productToCart"
 *     responses:
 *        200:
 *          description: added
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
 *                              $ref: "#/components/schemas/productToCart"
 */

/**
 * @openapi
 * /api/v1/cart/{cartId}/products:
 *   get:
 *     security:
*        - bearerAuth: []
 *     summary: Obtiene todos los productos del carrito del usuario
 *     tags: [Shopping Cart]
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           description: cartId
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
 *                            items: {}
 */



/**
 * @openapi
 * /api/v1/cart/{cartId}/buy:
 *   put:
 *     security:
*        - bearerAuth: []
 *     summary: Compra el carrito y cambio el estado de los productos a purchased
 *     tags: [Shopping Cart]
 *     requestBody:
 *       description: To buy a cart you need your username and email
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/buyCart"
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           description: cartId
 *     responses:
 *        200:
 *          description: added
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
 *                              $ref: "#/components/schemas/buyCart"
 */
const router = Router();
router.post("/cart/:userId", authenticate, createUserCart)
router.post("/cart/:cartId/addproduct", authenticate, addProductToCart)
router.get("/cart/:cartId/products", authenticate, getProductsInCart)
router.put("/:userId/:cartId/buy", authenticate, buyProductsInCart)

module.exports = router;
