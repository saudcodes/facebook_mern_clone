const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

const PORT = 8000

server.listen(PORT, () => {
  console.log.info(`Server running on port ${PORT}`)
})