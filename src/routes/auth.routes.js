const { Router } = require("express");
const { userLogin } = require("../controllers");
const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Autentificacion de usuario
 *     tags: [Login]
 *     requestBody:
 *       description: you need an email and a password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: log in
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
 *                     $ref: "#/components/schemas/login"
 *
 */

router.post("/auth/login", userLogin);

module.exports = router;
