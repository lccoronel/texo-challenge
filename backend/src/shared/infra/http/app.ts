import express, { Request, Response, NextFunction } from 'express'

import { env } from '@/env'
import { AppError } from '@/shared/errors/AppError'
import { router } from './routes'

export const app = express()

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
