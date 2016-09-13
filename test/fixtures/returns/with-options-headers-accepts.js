'use strict';

module.exports = {
  headers: {
    'accepts': 'application/json',
    'user-agent': 'node.js/%node request (https://www.npmjs.com/package/request)'.replace( '%node', process.version )
  },
  timeout: 10000
};
