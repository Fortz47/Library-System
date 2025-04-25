// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
export const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library System Documentation',
      version: '1.0.0',
      description: 'This is the documentation for the Library System API',
    },
    servers: [
      {
        url: 'http://localhost:3333', // Change as needed
      },
    ],
  },
//   apis: ['./routes/books/index.ts'], // Path to your route files
  apis: ['./src/routes/**/*.ts']
};

export const swaggerSpec = swaggerJSDoc(options);
