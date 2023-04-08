import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { env } from './env'

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV === 'dev') {
    console.log(error)
  } else {
    // Datadog/Sentry
  }

  return reply.status(500).send({ messge: 'Internal server error' })
})
