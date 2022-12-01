const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { addProductToCart, getProductsInCart, buyProductsInCart, createUserCart } = require("../controllers");

//CREATE A NEW CART
/**
 * @openapi
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
*        - bearerAuth: []
 *     summary: Crea un nuevo carrito de compras para el usuario ingresado en el parametro
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

// ADD A NEW PRODUCT IN CART
/**
 * @openapi
 * /api/v1/cart/{cartId}/addproduct:
 *   post:
 *     security:
*        - bearerAuth: []
 *     summary: Añade un nuevo producto al carrito, colocando el id del carrito creado
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
 *          description: Necesitas ingresar en el body las propiedades productId y quantity para añadir un nuevo producto al carrito de compras
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
 *                              $ref: "#/components/schemas/productToCartResponses"
 */

// SHOW THE PRODUCTS IN THE CART 
/**
 * @openapi
 * /api/v1/cart/{cartId}/products:
 *   get:
 *     security:
*        - bearerAuth: []
 *     summary: Obtiene todos los productos del carrito con el id brindado como parametro
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
 *                              $ref: "#/components/schemas/getProductResponse"
 */

// BUY A CART 
/**
 * @openapi
 * /api/v1/:userId/:cartId/buy:
 *   put:
 *     security:
*        - bearerAuth: []
 *     summary: Compra el carrito, cambia el estado de los productos en el carrito a purchased y crea la orden de compra.
 *     tags: [Shopping Cart]
 *     requestBody:
 *       description: Para realizar una compra se necesita ingresar en los parametros el id del usuario y el id del carrito. En el body se necesita el username y email del comprador para que se le envie un mensaje personalizado de confirmación a su correo electrónico.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/sendUserData"
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           description: cartId
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
 *                              $ref: "#/components/schemas/buyResponse"
 */

const router = Router();
router.post("/cart/:userId", authenticate, createUserCart)
router.post("/cart/:cartId/addproduct", authenticate, addProductToCart)
router.get("/cart/:cartId/products", authenticate, getProductsInCart)
router.put("/:userId/:cartId/buy", authenticate, buyProductsInCart)

module.exports = router;