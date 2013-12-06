'use strict';

angular.module('flashlangApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.devs = [
    	{name: "Daniela Baron", url: "https://github.com/danielabar", img: "", githubid="danielabar"},
    	{name: "Nisha Shirawala", url: "https://github.com/nishashirawala", img: "", githubid="nishashirawala"},
    	{name: "Ben Hall", url: "https://github.com/hallb", img: "", githubid="hallb"},
    	{name: "Michelle Andrews", url: "https://github.com/insomniacdeziner", img: "", githubid="insomniacdeziner"},
    	{name: "Daeyoung Kang", url: "https://github.com/kdy3dan3", img: "", githubid="kdy3dan3"},
    	{name: "Val Fletcher", url: "http://ca.linkedin.com/pub/dir/Val/Fletcher", img: "", githubid="Val Fletcher"}
    ];
  });
