const { Router } = require("express");
const { authenticate } = require("../middlewares");
const { getUserOrders } = require("../controllers");

/**
 * @openapi
 * /api/v1/orders/{userId}:
 *   get:
 *     security:
*        - bearerAuth: []
 *     summary: Obtiene todas los ordenes del usuario brindado en el parametro
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *           description: id del usuario
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
 *                               $ref: "#/components/schemas/orders"
 */

const router = Router();

router.get("/orders/:userId", authenticate, getUserOrders);

module.exports = router;
