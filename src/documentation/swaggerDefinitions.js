exports.Project = {
    type: 'object',
    properties: {
      id: { type: 'integer', example: 1 },
      name: { type: 'string', example: 'Project ABC' },
      description: { type: 'string', example: 'Description of the project' },
    },
  };
  
  exports.ProjectUpdate = {
    type: 'object',
    properties: {
      name: { type: 'string', example: 'Updated Project' },
      description: { type: 'string', example: 'Updated project description' },
    },
  };
  