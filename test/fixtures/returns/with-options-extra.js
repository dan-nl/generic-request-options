'use strict';

module.exports = {
  headers: {
    'user-agent': 'node.js/%node request (https://www.npmjs.com/package/request)'.replace( '%node', process.version )
  },
  timeout: 10000,
  'url': 'https://www.google.com'
};