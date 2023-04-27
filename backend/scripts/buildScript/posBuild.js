const moveFile = require('./helper/movefile')

const CSVFile = './scripts/buildScript/data/movielist.csv'
const destination = './build/seed/uploadMovies/data'

moveFile(CSVFile, destination)
