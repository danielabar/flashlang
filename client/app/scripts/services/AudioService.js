'use strict';

angular.module('flashlangApp')
  .factory('AudioService', function ($document) {
    
    var audioElement = $document[0].createElement('audio'); 
    var correctAnswerSound = "sounds/correct.mp3";
		var incorrectAnswerSound = "sounds/incorrect.mp3";
		var endCreditsSound = "sounds/StarWarsEndTitle.mp3";
	  
	  return {
	    audioElement: audioElement,
	    
	    play: function(filename) {
	        audioElement.src = filename;
	        audioElement.play();     
	  	},

	  	playCorrect: function() {
	  		this.play(correctAnswerSound);
	  	},

	  	playIncorrect: function() {
	  		this.play(incorrectAnswerSound);
	  	},

			playEndCredits: function() {
	  		this.play(endCreditsSound);
	  	},


	  	playFeedback: function(result) {
	  		if (result) {
					this.playCorrect();
				} else {
					this.playIncorrect();
				}
	  	}
	  }

  });
