import Config from '../../ecosystem.config.js'

let config = Config.apps[0]
config.api = `${config.domain}:${(config.port + 50)}`
if (config.ssl) {
  config.api = `https://${config.api}`
} else {
  config.api = `http://${config.api}`
}

export default config
