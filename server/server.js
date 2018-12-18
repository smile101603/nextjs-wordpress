const express = require('express')
const { exec } = require('child_process')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
let config = require('../ecosystem.config')
config = config.apps[0]
if (config.ssl) {
  config.protocol = `https://`
} else {
  config.protocol = `http://`
}
const site = config.name
const port = config.port
const domain = config.domain
const protocol = config.protocol
const bootstrap = require('./bootstrap')

app.prepare().then(() => {
  const server = express()
  bootstrap(server)
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> ${site} nextjs on ${protocol}${domain}:${port}`)
  })

  exec(`cd ./wordpress && php -S ${domain}:${(port + 50)}`, (err) => {
    console.log(`> ${site} wordpress on ${protocol}${domain}:${(port + 50)}`)
    if (err) throw err
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
