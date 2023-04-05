import sqlite3 from 'sqlite3'

sqlite3.verbose()

const database = new sqlite3.Database('database.db')

database.serialize(() => {
  database.run('CREATE TABLE movies (id varchar(255))')

  const stmt = database.prepare('INSERT INTO movies (id) VALUES ("1123")')
  stmt.run()
  stmt.finalize()

  database.get('SELECT id FROM movies', (_, row) => {
    console.log(row)
  })
})

database.close()
