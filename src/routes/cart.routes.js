const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { addProductToCart, getProductsInCart } = require("../controllers");

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


const router = Router();
router.post("/cart/:cartId/addproduct", authenticate, addProductToCart)
router.get("/cart/:cartId/products", authenticate, getProductsInCart)

module.exports = router;
