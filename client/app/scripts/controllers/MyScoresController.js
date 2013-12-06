'use strict';

angular.module('flashlangApp')
  .controller('MyscoresCtrl', function ($scope, Deck) {
    $scope.decks = Deck.query(function(response) {
		 $scope.scoreCard = response[0];
		 $scope.level = '';
	});

	$scope.scoreCardChanged = function(){
		$scope.level = '';
	};
	
  });
