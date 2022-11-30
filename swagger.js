// importamos las dos depencias que acabamos de instalar
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API - Documentación - John Asto",
      version: "1.0.0",
      description: "API que sirve para conectar base de datos de un Ecommerce con el cliente",
    },
  },
  apis: [
    "./src/routes/users.routes.js",
    "./src/routes/auth.routes.js",
    "./src/routes/products.routes.js",
    "./src/routes/cart.routes.js",
    "./src/routes/orders.routes.js",
    "./src/models/users.models.js",
    "./src/models/products.models.js",
    "./src/models/cart.models.js",
    "./src/models/order.models.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });
  //
  console.log(
    `Documentación disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
