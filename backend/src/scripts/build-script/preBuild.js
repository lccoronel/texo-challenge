const moveFile = require('./helper/movefile')

const CSVFile = './src/seed/uploadMovies/data/movielist.csv'
const destination = './scripts/build/data'

moveFile(CSVFile, destination)
