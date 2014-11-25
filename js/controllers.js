  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    
    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    }; 

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
