angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('bus', {
    url: '/page2',
    templateUrl: 'templates/bus.html',
    controller: 'busCtrl'
  })

  .state('vichleVerification', {
    url: '/page10',
    templateUrl: 'templates/vichleVerification.html',
    controller: 'vichleVerificationCtrl'
  })

  .state('taxi', {
    url: '/page4',
    templateUrl: 'templates/taxi.html',
    controller: 'taxiCtrl'
  })

  .state('onCommingTraffic', {
    url: '/page5',
    templateUrl: 'templates/onCommingTraffic.html',
    controller: 'onCommingTrafficCtrl'
  })

  .state('private', {
    url: '/page7',
    templateUrl: 'templates/private.html',
    controller: 'privateCtrl'
  })

  .state('private2', {
    url: '/page8',
    templateUrl: 'templates/private2.html',
    controller: 'private2Ctrl'
  })

  .state('roadStutus', {
    url: '/page9',
    templateUrl: 'templates/roadStutus.html',
    controller: 'roadStutusCtrl'
  })

  .state('reportAccident', {
    url: '/page3',
    templateUrl: 'templates/reportAccident.html',
    controller: 'reportAccidentCtrl'
  })

  .state('gPS', {
    url: '/page6',
    templateUrl: 'templates/gPS.html',
    controller: 'gPSCtrl'
  })

  .state('mySpeed', {
    url: '/page11',
    templateUrl: 'templates/mySpeed.html',
    controller: 'mySpeedCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});