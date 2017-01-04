angular.module('wordsApp',['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      })
      .state('rhymes', {
        url: '/rhymes',
        templateUrl: './views/rhymes.html',
        controller: 'rhymesCtrl'
      })
      .state('synonyms', {
        url: '/synonyms',
        templateUrl: './views/synonyms.html',
        controller: 'synonymsCtrl'
      })
      $urlRouterProvider.otherwise('/')
  })
