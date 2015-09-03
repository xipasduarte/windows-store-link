'use strict';
var assert           = require('assert');
var windowsStoreLink = require('./');
var baseURL          = 'https://www.microsoft.com';
var urlBit           = '/store/apps/';
var id               = 'duolingo-learn-languages-for-free/9wzdncrcv5xn';
var lang             = 'pt-pt';

// Test link construction (no null parameters).
it('should ', function () {
	assert.strictEqual(
		windowsStoreLink(id), baseURL + urlBit + id
	);
	assert.strictEqual(
		windowsStoreLink(id, lang), baseURL + '/' + lang + urlBit + id
	);
});

// Test link construction (with null parameters).
it('should ', function () {
	assert.strictEqual(
		windowsStoreLink(id, null), baseURL + urlBit + id
	);
});
