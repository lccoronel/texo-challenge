import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import swaggerUI from 'swagger-ui-express'

import { env } from '@/shared/infra/env'
import { AppError } from '@/shared/errors/app-error'
import * as swaggerFile from '@/shared/infra/providers/docs/swagger.json'
import { router } from './routes'

export const app = express()

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(router)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (env.NODE_ENV === 'dev') {
      console.log(error)
    } else {
      // Datadog/Sentry
    }

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message })
    }

    return response.status(500).json({
      status: 'error',
      message: `internal server error - ${error.message}`,
    })
  },
)
