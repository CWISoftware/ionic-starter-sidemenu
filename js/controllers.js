angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.menuOptions = [
    { title: 'Login', id: 'login' },
    { title: 'Projetos', id: 'projetos' }
  ];
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
})

.controller('PlaylistsCtrl', function($scope, $http) {
  $http.get('/js/screens_metadata.json').success(function(data) { 
    console.log(data);
    });  

  $scope.playlists = [
    { title: 'Elefante Letrado', id: 1 },
    { title: 'Literatura', id: 2 },
    { title: 'Tecnologia', id: 3 },
    { title: 'Entretenimento', id: 4 },
    { title: 'Agenda Cultural', id: 5 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
