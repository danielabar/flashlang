'use strict';

angular.module('flashlangApp')
	.factory('ScoreResource', function($resource) {
		return $resource('/score/:id');
	});