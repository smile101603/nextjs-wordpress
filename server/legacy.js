const path = require('path');

/* 
  Legacy 
  Handles redirects and legacy urls.
*/
const handle = (server) =>{


  server.get('/wp-content/uploads/2016/10/Privacy-Policy.pdf', (req, res) => (
    res.redirect('/static/Privacy-Policy.pdf')
  ));
}

module.exports = handle