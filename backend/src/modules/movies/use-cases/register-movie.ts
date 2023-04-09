import { MoviesRepository } from '@/modules/movies/repositories/movies-repository'
import { Movie } from '@/modules/movies/dtos/movie'
import { AppError } from '@/shared/errors/app-error'

export class RegisterMovieUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(params: Movie) {
    const moviesAlreadyExists = await this.moviesRepository.findByTitle(
      params.title,
    )

    if (moviesAlreadyExists) throw new AppError('Movie already exists')

    const movie = await this.moviesRepository.create(params)

    return movie
  }
}
