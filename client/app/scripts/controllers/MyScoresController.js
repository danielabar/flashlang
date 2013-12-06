'use strict';

angular.module('flashlangApp')
  .controller('MyscoresCtrl', function ($scope, Deck, ScoreResource) {
    $scope.decks = Deck.query(function(response) {
		 $scope.scoreCard = response[0];
		 $scope.level = '';
	});

	$scope.scoreCardChanged = function(){
		$scope.level = '';
	};

	var numbersGame = "Numbers";
	var daysOfWeekGame ="Days of the Week";
	var nounsGame = "Nouns Pluralization";
	var articlesGame = "Definite Articles";

	var beginner = "Beginner";
	var intermediate = "Intermediate";
	var advanced = "Advanced";

	$scope.numbersScoreBoard = new Array();
	$scope.numbersBeginnerScoreBoard = new Array();
	$scope.numbersIntermediateScoreBoard = new Array();
	$scope.numbersAdvanceScoreBoard = new Array();

	$scope.scoreBoard = ScoreResource.query(function (response) {				
	    angular.forEach(response, function (item) {
	        if (item.deckName == numbersGame) {		        	
	        	 $scope.numbersScoreBoard.push(item);
	        	 if(item.level.toUpperCase() == beginner.toUpperCase()) {
	        	 		$scope.numbersBeginnerScoreBoard.push(item);
	        	 }	
	        	 if(item.level.toUpperCase() == intermediate.toUpperCase()) {
	        	 		$scope.numbersIntermediateScoreBoard.push(item);		        	 		
	        	 }	
	        	 if(item.level.toUpperCase() == advanced.toUpperCase()) {
	        	 		$scope.numbersAdvanceScoreBoard.push(item);		        	 		
	        	 }	
	        }
	    });
	});

	$scope.numberslineChartScore = [{values: $scope.numbersBeginnerScoreBoard},
	  								{values: $scope.numbersIntermediateScoreBoard},
									{values: $scope.numbersAdvanceScoreBoard}];

  });
