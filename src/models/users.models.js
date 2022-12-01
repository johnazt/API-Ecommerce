const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     login:
 *       type: object
 *       properties:
 *          email: 
 *            type: string
 *            example: user@gmail.com
 *          password: 
 *            type: string
 *            example: 1234sdf
 *     loginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: Juan Perez
 *         email: 
 *           type: string
 *           example: juan@gmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJFcmVuIFllYWdlciIsImVtYWlsIjoiZXJlbkBnbWFpbC5jb20iLCJpYXQiOjE2Njk5MTE0NzIsImV4cCI6MTY2OTkxNTA3Mn0.  
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: New User
 *         email:
 *           type: string
 *           example: user@gmail.com
 *         password:
 *           type: string
 *           example: 234jkhg54
 *     registerResponse:
 *        type: object
 *        properties:
 *           id:
 *            type: integer
 *            example: 1
 *           username:
 *             type: string
 *             example: New User
 *           email:
 *             type: string
 *             example: user@gmail.com
 *           password:
 *             type: string
 *             example: 234jkhg54afg3gafgart14514
 *     getUsersResponse:
 *       type: object
 *       properties:
 *          id:
 *             type: integer
 *             example: 1
 *          username:
 *             type: string
 *             example: Juan Perez
 *          email:
 *             type: string
 *             example: juan@gmail.com 
 *   securitySchemes:
 *     bearerAuth: 
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }, 
);

module.exports = Users