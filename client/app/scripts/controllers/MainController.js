'use strict';

angular.module('flashlangApp')
  .controller('MainCtrl', function ($scope, DeckResource) {
    $scope.decks = DeckResource.query();
  });
