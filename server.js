import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/app'

const server = express()

server.use('/', express.static(path.resolve(__dirname, './build')))

server.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)
  const html = path.join(__dirname, './build/server.html')
  fs.readFile(html, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }

    return res.send(
      data.replace(
        '<div id="mx-assignment-container"></div>',
        `<div id="mx-assignment-container">${app}</div>`
      )
    )
  })
})

server.get('/client', (req, res) => {
  res.sendFile(path.join(__dirname, './build/client.html'))
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
