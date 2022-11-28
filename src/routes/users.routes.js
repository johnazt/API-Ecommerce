const { Router } = require("express");
const { userRegister } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Registro de nuevo usuario en el ecommerce
 *     tags: [User Register]
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

router.post("/users", userRegister);

module.exports = router;
