  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    $scope.page_metadata = {
      title: 'Opções'
    }

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.menuOptions = [
    { title: 'Login', id: 'login' },
    { title: 'Projetos', id: 'projetos' },
    { title: 'Áudios', id: 'browse'},
    { title: 'Pesquisar', id: 'search'}
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
    title: 'Áudios', initialHTML: 'Este é um conteúdo de testes'
  };

  var FIRST_TRACK = 1;
  var SECOND_TRACK = 2;
  $scope.nextTrackToPlay = SECOND_TRACK;

  $scope.tracks = [];
  function populateTracklist(){
    for (var i = 1; i <= 4; i++) {
      $scope.tracks[i] = new Audio(getMediaURL("sounds/page" + i + ".mp3"));
      $scope.tracks[i].load();
    };
  }
  /*
  Função responsável por setar as chamadas encadeadas das tracks. Ao chegar ao fim de sua execução, 
  o objeto responsável pela faixa chama o método de execução da próxima, e assim por diante.
  */
  function setAudioCallBacks(){
    for (var i = 1; i <= 4;i++) {
      var currentAudio = $scope.tracks[i]; 
      if (i < $scope.tracks.length-1){
        currentAudio.addEventListener("ended", playNextTrack);
      }
      /* Ao chegar à última faixa, o número da próxima faixa a ser executada deve retornar à primeira posição, 
      permitindo que o usuário ouça a tracklist novamente caso queira*/
      else{
        currentAudio.addEventListener("ended", resetNextTrackNumber);
      } 
    };
  }

  function androidPlayNextTrack(){
    var media = $scope.tracks[$scope.nextTrackToPlay];
    media.play();
    $scope.nextTrackToPlay++;
  }
  var tracklistSize = 4;
  function androidPopulateTracklist(){
    for (var i = 1; i <= 4; i++) {
      if (i < tracklistSize){
       $scope.tracks[i] = new Media(getMediaURL("sounds/page" + i + ".mp3"), androidPlayNextTrack, null);
      }
      else{
       $scope.tracks[i] = new Media(getMediaURL("sounds/page" + i + ".mp3"), resetNextTrackNumber, null);
      } 
    };
  }
  //Verifica se o dispositivo é android, garantindo uma execução diferenciada
  if (typeof device !== 'undefined' && device.platform.toLowerCase() === "android"){
    androidPopulateTracklist();
  }
  else{
    populateTracklist();
    setAudioCallBacks();
  }

  function resetNextTrackNumber(){
    $scope.nextTrackToPlay = SECOND_TRACK;
  }

  $scope.playFirstTrack = function(){
    $scope.tracks[FIRST_TRACK].play();
  }

  function playNextTrack(){
    var audio = $scope.tracks[$scope.nextTrackToPlay];
    audio.load();
    audio.addEventListener("canplaythrough",function(){
      audio.play();
    });
    $scope.nextTrackToPlay++;
  }

  function getMediaURL(s) {
    if (typeof device !== 'undefined'){
     if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
   }
   return s;
  }

  function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
  }

  });
