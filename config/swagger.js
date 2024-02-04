module.exports = {
    info: {
      version: '1.0.0',
      title: 'Orange Portfolio API',
      description: 'Documentação da API do Orange Portfolio',
    },
    host: 'localhost:5173',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      JWT: {
        description: 'JWT token',
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    definitions: {
    },
  };  