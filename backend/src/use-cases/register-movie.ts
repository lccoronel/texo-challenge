import { MoviesRepository } from '@/repositories/movies/movies-repository'
import { MovieAlreadyExistserror } from './errors/movie-already-exists-error'
import { Movie } from '@/dtos/movie'

export class RegisterMovieUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(params: Movie) {
    const moviesAlreadyExists = await this.moviesRepository.findByTitle(
      params.title,
    )

    if (moviesAlreadyExists) throw new MovieAlreadyExistserror()

    const movie = await this.moviesRepository.create(params)

    return movie
  }
}
