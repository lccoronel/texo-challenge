export class MovieAlreadyExistserror extends Error {
  constructor() {
    super('Movie already exists')
  }
}
