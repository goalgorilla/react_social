if (typeof window === 'undefined') {
  const jsdom = require('jsdom');
  const {JSDOM} = jsdom;
  module.exports = JSDOM;
} else {
  module.exports = DOMParser;
}
