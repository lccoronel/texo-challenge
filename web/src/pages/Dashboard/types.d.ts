/* eslint-disable no-unused-vars */
declare namespace Dashboard {
  interface Year {
    year: number
    _count: {
      winner: number
    }
  }

  interface Studio {
    studios: string
    _count: {
      winner: number
    }
  }

  interface Producer {
    producer: string
    interval: number
    previousWin: number
    followingWin: number
  }

  interface Winners {
    id: string
    year: number
    title: string
    studios: string
    producers: string
    winner: boolean
    created_at: string
  }

  interface Awards {
    max: Producer[]
    min: Producer[]
  }
}
