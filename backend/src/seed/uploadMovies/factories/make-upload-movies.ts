import { PrismaMoviesRepository } from '@/repositories/movies/prisma-movies-repository'
import { RegisterMovieUseCase } from '@/use-cases/register-movie'
import { UploadMoviesSeed } from '..'

export function makeuploadMovies() {
  const moviesRepository = new PrismaMoviesRepository()
  const registerMovieUseCase = new RegisterMovieUseCase(moviesRepository)

  const uploadMoviesSeed = new UploadMoviesSeed(registerMovieUseCase)

  return uploadMoviesSeed
}
