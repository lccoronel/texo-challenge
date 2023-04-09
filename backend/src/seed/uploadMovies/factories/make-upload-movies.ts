import { RegisterMovieUseCase } from '@/modules/movies/use-cases/register-movie'
import { PrismaMoviesRepository } from '@/modules/movies/repositories/prisma-movies-repository'
import { UploadMoviesSeed } from '..'

export function makeuploadMovies() {
  const moviesRepository = new PrismaMoviesRepository()
  const registerMovieUseCase = new RegisterMovieUseCase(moviesRepository)

  const uploadMoviesSeed = new UploadMoviesSeed(registerMovieUseCase)

  return uploadMoviesSeed
}
