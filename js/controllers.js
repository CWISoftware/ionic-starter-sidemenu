  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

     //Placeholder for login module, if it wasn't required on generation please ignore this
    
    $scope.page_metadata = {
      title: 'Opções'
    }

  $http.get('/js/screens_metadata.json').success(function($scope, data) { 
      $scope.menuOptions = JSON.parse(data);
    }); 
  })

  .controller('PlaylistsCtrl', function($scope, $http) {
    $http.get('/js/screens_metadata.json').success(function(data) { 
      console.log(data);
    });  
    $scope.page = {
      title: 'Projetos'
    }

    $scope.playlists = [
    { title: 'Elefante Letrado', id: 1 },
    { title: 'Portal Renner PPF', id: 2 },
    { title: 'Portal Lojas Colombo', id: 3 },
    { title: 'Sitema Unimed', id: 4 },
    { title: 'Agenda Cultural', id: 5 }
    ];
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  })

 
  
  .controller('BrowseCtrl', function($scope) {
   $scope.page_metadata = {
    title: 'Setores', initialHTML: 'Este é um conteúdo de testes'
  };
});
