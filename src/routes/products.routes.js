const { Router } = require("express");
const { getAllProducts } = require("../controllers");
const { authenticate } = require("../middlewares");

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
 *                            items: {}
 */

const router = Router();
router.get("/products", authenticate, getAllProducts);

// router.post("/products", authenticate, createNewProduct);

module.exports = router;
