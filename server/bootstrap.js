
/* Server Functions */
const common = require('./common.js');
const legacy = require('./legacy.js');
const contact = require('./contact.js');

const run = (server) =>{
  common(server);
  legacy(server);

  contact(server);
}

module.exports = run