module.exports = {
  apps: [
    {
      port: 3000,
      ssl: false,
      domain: '127.0.0.1',
      name: 'example-site.com.au',
      script: './server/server.js',
      watch: false,
      env: {
        'NODE_ENV': 'production'
      }
    }
  ]
}
