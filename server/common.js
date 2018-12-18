const path = require('path');

const handle = (server) =>{
  const robotsOptions = {
    root: path.join(__dirname, '/static/'),
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  }
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', robotsOptions)
  ));
}

module.exports = handle