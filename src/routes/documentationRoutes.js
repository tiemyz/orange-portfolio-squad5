import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
const swaggerFile = require('../swagger_documentation.json');

const routes = new Router();

routes.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

// Rota para obter um projeto pelo ID (exemplo)
routes.get(
  '/projects/:id',
  (req, res) => {
    // Lógica para obter um projeto pelo ID
    const projectId = req.params.id;
    // Implemente a lógica para obter o projeto com base no ID

    // Exemplo simples, considere adaptar conforme necessário
    const project = {
      id: projectId,
      name: 'Nome do Projeto',
      description: 'Descrição do Projeto',
    };

    // Verifica se o projeto foi encontrado
    if (project) {
      // Retorna o projeto
      res.status(200).json(project);
    } else {
      // Retorna uma resposta de erro se o projeto não for encontrado
      res.status(404).json({ msg: 'Projeto não encontrado.' });
    }
  },
  // Adicione comentários Swagger conforme necessário
);

export default routes;
