const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { createNewOrder } = require("../controllers");

/**
 * @openapi
 * /api/v1/order:
 *   post:
 *     security:
*        - bearerAuth: []
 *     summary: Crea una nueva orden
 *     tags: [Orders]
 *     requestBody: 
 *          description: You need a userId
 *          required: true
 *          content: 
 *            application/json:
 *              schema:
 *                  $ref: "#/components/schemas/order"
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
 *                            type: array
 *                            items: 
 *                              $ref: "#/components/schemas/order"
 */


const router = Router();

router.post("/order", authenticate, createNewOrder);

module.exports = router;
