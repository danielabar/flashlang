'use strict';

angular.module('flashlangApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
