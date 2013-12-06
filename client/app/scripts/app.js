'use strict';

angular.module('flashlangApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'underscore'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myscores', {
        templateUrl: 'views/myscores.html',
        controller: 'MyscoresCtrl'
      })
      .when('/game/level/:level/name/:name', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/score/:id', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
