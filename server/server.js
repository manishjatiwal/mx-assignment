import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src'
import template from '../template'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StaticRouter } from 'react-router-dom/server'

const server = express()

server.use('/build', express.static(path.resolve(__dirname, '../build')))

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet()
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    </StaticRouter>
  )
  const styles = sheet.getStyleTags()
  sheet.seal()
  const scripts = '<script src="./build/server.js"></script>'
  const _html = template({ content, styles, scripts, title: 'MX Home' })
  return res.send(_html)
})

server.get('/client', (req, res) => {
  const scripts = '<script src="./build/client.js"></script>'
  const _html = template({ scripts, title: 'MX Home' })
  return res.send(_html)
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
