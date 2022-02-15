import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src'
import template from './template'

const server = express()

server.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)
  const _html = template(app)
  return res.send(_html)
})

// server.get('/client', (req, res) => {
//   res.sendFile(path.join(__dirname, './build/index.html'))
// })

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
