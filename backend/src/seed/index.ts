import { makeuploadMovies } from './uploadMovies/factories/make-upload-movies'

const uploadMovies = makeuploadMovies()

uploadMovies.execute().then(() => console.log('Uploaded movies'))
