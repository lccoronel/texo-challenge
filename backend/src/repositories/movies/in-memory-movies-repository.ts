/* eslint-disable no-sequences */
import { Movies } from '@prisma/client'
import { MoviesRepository } from './movies-repository'

export class InMemoryMoviesRepository implements MoviesRepository {
  public items: Movies[] = []

  async findMultipleWinnersByYear(): Promise<any> {
    const yearsList = this.items.map((item) => {
      if (item.winner) {
        return item.year
      }
    })

    const movies = yearsList.reduce(
      (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
      {},
    )

    return movies
  }

  async findByTitle(title: string): Promise<Movies | null> {
    const movie = this.items.find((item) => item.title === title)

    if (movie) {
      return movie
    }

    return null
  }

  async create(data: Movies): Promise<Movies> {
    this.items.push(data)

    return data
  }
}
