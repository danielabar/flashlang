'use strict';

angular.module('flashlangApp')
  .controller('ScoreCtrl', function ($scope, $routeParams, ScoreResource) {

  	$scope.scoreId=$routeParams.id;

		ScoreResource.get({id: $scope.scoreId}, function(scoreDetails) {
   		$scope.score = scoreDetails;
   	});
  });
