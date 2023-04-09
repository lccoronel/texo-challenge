import { Router } from 'express'

import { moviesRouter } from './movies.routes'

export const router = Router()

router.use('/movies', moviesRouter)
