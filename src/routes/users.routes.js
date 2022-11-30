const { Router } = require("express");
const { userRegister , getAllUsers} = require("../controllers");
const { authenticate } = require("../middlewares");

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Registro de nuevo usuario en el ecommerce
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a username,    email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/register"
 *
 */

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     security:
*        - bearerAuth: []
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
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

router.post("/users", userRegister);
router.get("/users",authenticate, getAllUsers);

module.exports = router;
