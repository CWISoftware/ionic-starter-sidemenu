  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

     //Placeholder for login module, if it wasn't required on generation please ignore this

    $scope.page_metadata = {
      title: 'Opções'
    }

  $http.get('/js/screens_metadata.json').success(function(data) { 
      alert(data.toString());
      $scope.menuOptions = data;
    }); 
  })

  .controller('PlaylistsCtrl', function($scope, $http) {
    $scope.page = {
      title: 'Projects'
    }

    $scope.playlists = [
    { title: 'Option #1', id: 1 },
    { title: 'Option #2', id: 2 },
    { title: 'Option #3', id: 3 },
    { title: 'Option #4', id: 4 },
    { title: 'Option #5', id: 5 }
    ];
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  })
  
  .controller('BrowseCtrl', function($scope) {
   $scope.page_metadata = {
    title: 'Setores', initialHTML: 'Este é um conteúdo de testes'
  };
});