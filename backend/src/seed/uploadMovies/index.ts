import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'
import { Movie } from '@/modules/movies/dtos/movie'
import { RegisterMovieUseCase } from '@/modules/movies/use-cases/register-movie'
import { AppError } from '@/shared/errors/app-error'

export class UploadMoviesSeed {
  constructor(private registerMovieUseCase: RegisterMovieUseCase) {}

  loadMovies(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      const dirPath = path.join(
        __dirname,
        'uploadMovies',
        'data',
        'movielist.csv',
      )
      const stream = fs.createReadStream(dirPath)
      const parseFile = parse({ delimiter: ';' })
      const movies: Movie[] = []
      let fisrtLine = true

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          if (fisrtLine) {
            fisrtLine = false
            return
          }

          const [year, title, studios, producers, winner] = line

          movies.push({
            year: Number(year),
            title,
            studios,
            producers,
            winner: !!winner.length,
          })
        })
        .on('end', () => resolve(movies))
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(): Promise<void> {
    const movies = await this.loadMovies()

    movies.map(async (movie) => {
      try {
        await this.registerMovieUseCase.execute(movie)
      } catch (error) {
        if (error instanceof AppError) {
          console.log(error.message)
          return
        }

        console.log(error)
      }
    })
  }
}
