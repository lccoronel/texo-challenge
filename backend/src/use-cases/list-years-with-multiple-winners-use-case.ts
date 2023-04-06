import { MoviesRepository } from '@/repositories/movies/movies-repository'

export class ListYearsWithMultipleWinnersUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute() {
    const data = await this.moviesRepository.findMultipleWinnersByYear()

    return data
  }
}
