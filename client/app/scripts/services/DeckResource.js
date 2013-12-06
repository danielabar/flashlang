'use strict';

angular.module('flashlangApp')
	.factory('DeckResource', function($resource) {
		return $resource('/deck/:name');
	});