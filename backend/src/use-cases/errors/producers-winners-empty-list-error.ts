export class ProducersWinnersEmptyListError extends Error {
  constructor() {
    super('There is not producers list')
  }
}
