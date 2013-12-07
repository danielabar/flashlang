'use strict';

angular.module('flashlangApp')
  .controller('AboutCtrl', function ($scope, AudioService) {
    document.getElementById("homeNavBar").className = '';
    document.getElementById("myScoresNavBar").className = '';
    document.getElementById("aboutNavBar").className = 'active';

    $scope.devs = [
    	{name : "Daniela Baron", url: "https://github.com/danielabar", githubid: "danielabar",
    	img: "https://0.gravatar.com/avatar/04a168985807599081ca491758ea9c08?d=https%3A%2F%2Fidenticons.github.com%2F21236e1132b9c12058612a951c6601e2.png&r=x&s=440"},
    	{name : "Nisha Shirawala", url: "https://github.com/nishashirawala", githubid: "nishashirawala",
    	img: "https://1.gravatar.com/avatar/daa75c621262fedf7fabbe0a8582be12?d=https%3A%2F%2Fidenticons.github.com%2F43fc422fe5d9c7293d7d7d55479f97c1.png&r=x&s=440"},
    	{name : "Ben Hall", url: "https://github.com/hallb", githubid: "hallb",
    	img: "https://1.gravatar.com/avatar/12935f1117f4ee9a9fc53bbe1d2eac3a?d=https%3A%2F%2Fidenticons.github.com%2Fbaa0974233ecb9da49e8b2298f359417.png&r=x&s=440"},
    	{name : "Michelle Andrews", url: "https://github.com/insomniacdeziner", githubid: "insomniacdeziner",
    	img: "https://0.gravatar.com/avatar/12655ca9b69dee42c56b36d9feefff89?d=https%3A%2F%2Fidenticons.github.com%2Fc2b3344d82f64d4845828914db8aa481.png&r=x&s=440"},
    	{name : "Daeyoung Kang", url: "https://github.com/kdy3dan3", githubid: "kdy3dan3",
    	img: "https://2.gravatar.com/avatar/011f025029d8cd38929982847a2c970c?d=https%3A%2F%2Fidenticons.github.com%2F7cc749f9d85ab8ea7bed2b1d1a7cd148.png&r=x&s=440"},
    	{name : "Val Fletcher", url: "http://ca.linkedin.com/pub/dir/Val/Fletcher", githubid: "Val Fletcher",
    	img: "http://m.c.lnkd.licdn.com/mpr/pub/image-_pVCb8CXwiYufVqbRvPwSdNjGIL5Roe3_kH7wpdvG7pE0DaU_pV7FNLXGsCopa5zDtZ8/val-fletcher.jpg"}
    ];

    $scope.playEndCredits = function() {
    	AudioService.playEndCredits();
    }
  });

