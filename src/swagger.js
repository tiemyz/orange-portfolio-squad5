
const swaggerAutogen = require('swagger-autogen')();

// Caminhos para os arquivos de definição de rotas
const endpoints = ['./src/routes/AppRoutes.jsx', './src/routes/documentationRoutes.js'];

// Caminho de saída para o arquivo de documentação Swagger
const outputFile = './src/swagger_documentation.json';

// Gere a documentação Swagger
swaggerAutogen(outputFile, endpoints);
