import { FastifyDynamicSwaggerOptions } from '@fastify/swagger'
import { FastifySwaggerUiOptions } from '@fastify/swagger-ui'
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'

export const swaggerSetup: FastifyDynamicSwaggerOptions = {
  swagger: {
    info: {
      title: 'Texo challenge swagger',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    paths: {
      '/movies': {
        get: {
          tags: ['Movies'],
          summary: 'List all movies',
          parameters: [{ name: 'year', in: 'query', type: 'string' }],
          responses: {
            '200': {
              description: 'Filtered by year',
            },
            '500': {
              description: 'Server error',
            },
          },
        },
      },
    },
  },
}

export const swaggerUISetup: FastifySwaggerUiOptions = {
  routePrefix: '/documentation',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (
      request: FastifyRequest,
      reply: FastifyReply,
      next: HookHandlerDoneFunction,
    ) {
      next()
    },
    preHandler: function (
      request: FastifyRequest,
      reply: FastifyReply,
      next: HookHandlerDoneFunction,
    ) {
      next()
    },
  },
  staticCSP: true,
  transformSpecification: (
    swaggerObject: Readonly<Record<string, any>>,
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    return swaggerObject
  },
  transformSpecificationClone: true,
}
