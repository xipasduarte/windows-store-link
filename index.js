'use strict';
var empty = require('is-empty');
var trim = require('trim');

module.exports = function (id, lang) {

	// Check if id is string and not empty.
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string for id.');
	}
	if ( empty(id) ) {
		throw new TypeError('The application id mustn\'t be empty.');
	} else {
		// Remove leading/trailing white space.
		id = trim(id);
	}

	// Check if lang is string and not empty.
	if (typeof lang !== 'string') {
		lang = '';
	}
	if ( ! empty(lang) ) {
		lang = '/' + trim(lang);
	}

	return 'https://www.microsoft.com' + lang + '/store/apps/' + id;
};
