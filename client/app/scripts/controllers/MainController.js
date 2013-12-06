'use strict';

angular.module('flashlangApp')
  .controller('MainCtrl', function ($scope, DeckResource) {
    $scope.decks = DeckResource.query();
    document.getElementById("homeNavBar").className = 'active';
    document.getElementById("myScoresNavBar").className = '';
    document.getElementById("aboutNavBar").className = '';
  });
