import { RegisterMovieUseCase } from '@/use-cases/register-movie'
import { UploadMoviesSeed } from './uploadMovies'
import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'

const moviesRepository = new PrismaMoviesRepository()
const registerMovieUseCase = new RegisterMovieUseCase(moviesRepository)

const uploadMovies = new UploadMoviesSeed(registerMovieUseCase)

uploadMovies.execute()
