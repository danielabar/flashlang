'use strict';

angular.module('flashlangApp')
	.controller('GameCtrl', function($scope, $routeParams, GameService, DeckResource, $location, AudioService, ScoreResource) {

 		
	  	$scope.level = $routeParams.level;
		$scope.name = $routeParams.name;

		DeckResource.get({name: $scope.name}, function(deckDetails) {
   		$scope.deck = deckDetails;
   		GameService.initGame(deckDetails, $scope.level);
   		$scope.currentCard = GameService.getNextCard();
   		$scope.scoreBoard = GameService.getScoreBoard();
   	});

		$scope.checkGuess = function() {
			var result = GameService.checkGuess($scope.currentCard, $scope.guess, $scope.level);
			AudioService.playFeedback(result);
			$scope.result = result;
			$scope.flashCardBehaviour = {flipCard: true, isAnswerCorrect: result};
			$scope.scoreBoard = GameService.updateScoreBoard(result, $scope.currentCard);
			$scope.scorePercentage = GameService.getScorePercentage();
			$scope.totalCards  = $scope.deck.cards.length;			
			$scope.completedCards = GameService.getCompletedCardNumber();
			$scope.progressBarText = $scope.completedCards  + " / " + $scope.totalCards;
			$scope.score_percent_style = {  "width": $scope.scorePercentage + '%' };
		};

		$scope.moveAhead = function() {
			$scope.flashCardBehaviour = {flipCard: false, isAnswerCorrect: undefined};
			$scope.currentCard = GameService.getNextCard();
			if ($scope.currentCard) {
				$scope.guess = " ";
			} else {
				finishGame();
			}
		};

		var finishGame = function() {
			var finalScoreBoard = GameService.getScoreBoard();
			ScoreResource.save(finalScoreBoard, function(res) {
				$location.path('/score/' + res._id);
			})
		}

	});