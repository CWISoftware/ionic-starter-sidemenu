  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

     //Placeholder for login module, if it wasn't required on generation please ignore this

    $scope.menuOptions = [
    {"title":"TAPPPPPP","uri":"/projetos", "initialHTML": "Este é um conteúdo de testes 1"},
    {"title":"Setores","uri":"/setores","initialHTML": "Este é um conteúdo de testes 2"},
    {"title":"Pesquisar","uri":"/search","initialHTML": "Este é um conteúdo de testes 3"}
    ]
  })

  .controller('ExampleCtrl', function($scope, $http) {

  })