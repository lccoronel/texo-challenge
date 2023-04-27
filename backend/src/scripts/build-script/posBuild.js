const moveFile = require('./helper/movefile')

const CSVFile = './scripts/build/data/movielist.csv'
const destination = './build/seed/uploadMovies/data'

moveFile(CSVFile, destination)
