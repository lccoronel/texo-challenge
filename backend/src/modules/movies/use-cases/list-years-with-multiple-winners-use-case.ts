import { MoviesRepository } from '@/modules/movies/repositories/movies-repository'

export class ListYearsWithMultipleWinnersUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute() {
    const data = await this.moviesRepository.findMultipleWinnersByYear()

    return data
  }
}
