'use strict';

angular.module('wordsApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  }).state('rhymes', {
    url: '/rhymes',
    templateUrl: './views/rhymes.html',
    controller: 'rhymesCtrl'
  }).state('synonyms', {
    url: '/synonyms',
    templateUrl: './views/synonyms.html',
    controller: 'synonymsCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
// $("input").keyup(function(event){
//     if(event.keyCode == 13){
//         $("button").click();
//     }
// });

// $( "#clickme" ).click(function() {
//   $( "#book" ).fadeIn( "slow", function() {
//
//   });
// });
"use strict";
'use strict';

angular.module('wordsApp').controller('homeCtrl', function ($scope) {
  $scope.test = 'hello';
});
'use strict';

angular.module('wordsApp').controller('rhymesCtrl', function ($scope, mainService) {
  $scope.getRhymes = function () {
    mainService.getRhymes($scope.specific).then(function (res) {
      $scope.rhymes = res.data;
    });
  };
  // $scope.getRhymes()
});
'use strict';

angular.module('wordsApp').controller('synonymsCtrl', function ($scope, mainService) {
  $scope.getSynonyms = function () {
    mainService.getSynonyms($scope.nom).then(function (res) {
      $scope.synonyms = res.data;
    });
  };
});
'use strict';

angular.module('wordsApp').service('mainService', function ($http, $q) {
  this.getRhymes = function (specific) {
    return $http({
      method: 'GET',
      url: 'https://api.datamuse.com/words?rel_rhy=' + specific
    });
  };

  this.getSynonyms = function (nom) {
    return $http({
      method: 'GET',
      url: 'https://api.datamuse.com/words?ml=' + nom
    });
  };
});
'use strict';

angular.module('wordsApp').directive('rhymeDirective', function () {
  return {
    restrict: 'E',
    templateUrl: './views/directiveTemplate.html'

  };
});
'use strict';

angular.module('wordsApp').directive('synonymDirective', function () {
  return {
    restrict: 'E',
    templateUrl: './views/directiveSynonyms.html'
  };
});