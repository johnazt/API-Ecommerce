const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { addProductToCart } = require("../controllers");

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
 *           description: cart Id
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

module.exports = router;
