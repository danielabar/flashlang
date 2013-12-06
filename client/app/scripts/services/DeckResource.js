'use strict';

angular.module('flashlangApp')
	.factory('Deck', function($resource) {
		return $resource('/deck/:name');
	});