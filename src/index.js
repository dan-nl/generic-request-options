'use strict';

var addRequestHeaders = require( './add-request-headers' );
var addTimeout = require( './add-timeout' );
var addUserAgent = require( './add-user-agent' );

/**
 * provides a generic set of request options for the npm request module that can be augmented
 *
 * @param {Object} [user_options]
 * @param {Object} [request_headers]
 * @returns {*|{}}
 */
module.exports = function getGenericRequestOptions( user_options, request_headers ) {
  var options = {};

  user_options = user_options || {};

  options.headers = addRequestHeaders( user_options.headers, request_headers );
  options.headers[ 'user-agent' ] = addUserAgent( user_options.headers );
  options.timeout = addTimeout( user_options.timeout );

  return options;
};
