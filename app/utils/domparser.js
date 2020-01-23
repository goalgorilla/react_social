// DOM parsing can take place on both the client and server.
// To load in different DOM parsers relevant to the code being run on client or server
// we can use the window object to check if we are on the server or client.
// In Node.js (server) there is no window object so we can then load in our JSDOM library
// otherwise if the window object exists then we can use the DOMParser as the code is run on the client
if (typeof window === 'undefined') {
  const jsdom = require('jsdom');
  const {JSDOM} = jsdom;
  module.exports = JSDOM;
} else {
  module.exports = DOMParser;
}
