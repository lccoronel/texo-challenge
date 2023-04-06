import { MoviesRepository } from '@/repositories/movies/movies-repository'

export class StudiosWithWinnersUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute() {
    const data = await this.moviesRepository.findStudioWithWinners()

    return data
  }
}
