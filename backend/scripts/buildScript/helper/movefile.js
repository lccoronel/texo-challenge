const fs = require('fs')
const path = require('path')

function moveFile(filePath, destPath) {
  const sourcePath = path.resolve(filePath)
  const fileName = path.basename(sourcePath)
  const destination = path.resolve(destPath, fileName)

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`File ${sourcePath} do not exist`)
  }

  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true })
  }

  fs.renameSync(sourcePath, destination)

  console.log('Successfully moved')
}

module.exports = moveFile
