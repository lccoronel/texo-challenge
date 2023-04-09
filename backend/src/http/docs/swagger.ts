import { FastifySchema } from 'fastify'

export const getMoviesSwagger: FastifySchema = {
  tags: ['Movies'],
  summary: 'List all movies',
  params: {
    type: 'string',
    properties: {
      projection: {
        type: 'string',
        description: 'request type',
      },
    },
  },
  response: {
    200: {
      description: 'Filtered by year',
      type: 'object',
      properties: {
        content: { type: 'object' },
        pageable: { type: 'object' },
        totalElements: { type: 'number' },
        last: { type: 'boolean' },
        totalPages: { type: 'number' },
        first: { type: 'boolean' },
        sort: { type: 'object' },
        number: { type: 'number' },
        numberOfElements: { type: 'number' },
        size: { type: 'number' },
      },
    },
    500: {
      description: 'Server error',
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
}
