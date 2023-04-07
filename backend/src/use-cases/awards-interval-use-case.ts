import {
  MoviesRepository,
  ProducersWinnersProps,
} from '@/repositories/movies/movies-repository'
import { ProducersWinnersEmptyListError } from './errors/producers-winners-empty-list-error'

interface Producers {
  producer: string
  years: number[]
}

interface ProducerResponse {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

export class AwardsIntervalUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  private getYearsInterval(producers: Producers[]) {
    let maxInterval: number | undefined
    let minInterval: number | undefined

    let minResult: ProducerResponse[] = []
    let maxResult: ProducerResponse[] = []

    producers.forEach(({ producer, years }) => {
      years.forEach((year, index) => {
        const fisrtProducer = index === 0

        if (!fisrtProducer) {
          const subtractedYears = year - years[index - 1]

          const result = [
            {
              producer,
              interval: subtractedYears,
              previousWin: year,
              followingWin: years[index - 1],
            },
          ]

          if (!maxInterval && !minInterval) {
            maxInterval = subtractedYears
            minInterval = subtractedYears

            maxResult = result
            minResult = result
          }

          if (maxInterval && maxInterval < subtractedYears) {
            maxInterval = subtractedYears
            maxResult = result
          }

          if (minInterval && minInterval > subtractedYears) {
            minInterval = subtractedYears
            minResult = result
          }
        }
      })
    })

    return { minResult, maxResult }
  }

  private producersFormatter(producers: ProducersWinnersProps[]) {
    const formattedProducers = producers
      .reduce<Producers[]>((accumulator, { producers, year }) => {
        const producerIndex = accumulator.findIndex(
          (item) => item.producer === producers,
        )

        const isProducerNotExist = producerIndex === -1

        if (isProducerNotExist) {
          accumulator.push({ producer: producers, years: [year] })
        } else {
          accumulator[producerIndex].years.push(year)
        }

        return accumulator
      }, [])
      .filter((item) => item.years.length > 1)

    return formattedProducers
  }

  async execute() {
    const producersWinnersList =
      await this.moviesRepository.getProducersWinners()

    if (!producersWinnersList) throw new ProducersWinnersEmptyListError()

    const formattedProducers = this.producersFormatter(producersWinnersList)
    const { maxResult, minResult } = this.getYearsInterval(formattedProducers)

    return { max: maxResult, min: minResult }
  }
}
