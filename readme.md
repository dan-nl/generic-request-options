# generic request options
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

provides a generic set of request options for the [request][request-url] package that can be augmented with the functions parameters.

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [getGenericRequestOptions( [options][, request_headers] )](#getgenericrequestoptions-options-request_headers-)
    * [default](#default)
    * [adding user options](#adding-user-options)
    * [overriding the default timeout](#overriding-the-default-timeout)
    * [adding additional headers](#adding-additional-headers)
    * [with request.headers](#with-requestheaders)
* [license](#license)

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

### adding user options
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );
var user_options = { method: 'get', url: 'https://your.api' };

request(
  getGenericRequestOptions( user_options ),
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
  },
  method: 'get',
  timeout: 10000,
  url: 'https://your.api'
}
```

### overriding the default timeout
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );
var user_options = { method: 'get', timeout: 3000, url: 'https://your.api' };

request(
  getGenericRequestOptions( user_options ),
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
  },
  method: 'get',
  timeout: 3000,
  url: 'https://your.api'
}
```

### adding additional headers
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );
var user_options = { method: 'get', url: 'https://your.api' };

request(
  getGenericRequestOptions( user_options, { headers: { accept: 'application/json' } } ),
  function responseHandler( err, res, body ) {}
);

// getGenericRequestOptions => {
  headers: {
    accept: 'application/json',
    'user-agent': 'node.js/<node-version> request (https://www.npmjs.com/package/request)'
  },
  method: 'get',
  timeout: 10000,
  url: 'https://your.api'
}
```

### with request.headers
where `req.headers` is, for example, the header object from an [express][express-url] route request
```javascript
var getGenericRequestOptions = require( 'generic-request-options' );
var request = require( 'request' );
var user_options = { method: 'get', url: 'https://your.api' };

request(
  getGenericRequestOptions( user_options, req.headers ),
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
  method: 'get',
  timeout: 10000,
  url: 'https://your.api'
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
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/3d50dee7-3812-4afc-83d5-b3b46c6966ba/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/3d50dee7-3812-4afc-83d5-b3b46c6966ba
[request-url]: https://www.npmjs.com/package/request
[travis-image]: https://travis-ci.org/dan-nl/generic-request-options.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/generic-request-options
