import { GetMoviesController } from '@/http/controllers/movies/get-movies-controller'
import { Router } from 'express'

export const moviesRouter = Router()

const getMoviesController = new GetMoviesController()

moviesRouter.get('/', getMoviesController.handle)
