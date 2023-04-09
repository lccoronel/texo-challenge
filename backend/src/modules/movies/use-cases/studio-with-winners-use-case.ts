import { MoviesRepository } from '@/modules/movies/repositories/movies-repository'

export class StudiosWithWinnersUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute() {
    const data = await this.moviesRepository.findStudioWithWinners()

    return data
  }
}
