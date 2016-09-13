# generic request options
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

provides a generic set of request options for the npm [request][request-url] module that can be augmented.

## installation
```javascript
npm install generic-request-options
```

## usage
### getGenericRequestOptions( [options][, request_headers] )
```javascript
@param {Object} [options]
@param {Object} [request_headers]
@returns {Object}
```

### default
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );

request(
  getGenericRequestOptions()
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
  },
  timeout: 10000
}
```

### overriding the default timeout
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );

request(
  getGenericRequestOptions( { timeout: 3000 } ),
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
  },
  timeout: 3000
}
```

### adding additional headers
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );

request(
  getGenericRequestOptions( { headers: { accepts: 'application/json' } } ),
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    accepts: 'application/json',
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
  },
  timeout: 10000
}
```

### with request.headers
where `request.headers` is, for example, the header object from an incoming [express][express-url] request 
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );

request(
  getGenericRequestOptions( null, request.headers ),
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
    'x-forwarded-for': <request_headers['x-forward-for']>,
    'x-forwarded-proto': <request_headers['x-forward-for']>,
    'x-real-agent': <request_headers['x-real-agent']>,
    'x-real-ip': <request_headers['x-real-ip']>
  },
  timeout: 10000
}
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/generic-request-options/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/generic-request-options?branch=master
[express-url]: https://www.npmjs.com/package/express
[mit-license]: https://raw.githubusercontent.com/dan-nl/generic-request-options/master/license.txt
[npm-image]: https://img.shields.io/npm/v/generic-request-options.svg
[npm-url]: https://www.npmjs.com/package/generic-request-options
[request-url]: https://www.npmjs.com/package/request
[travis-image]: https://travis-ci.org/dan-nl/generic-request-options.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/generic-request-options
