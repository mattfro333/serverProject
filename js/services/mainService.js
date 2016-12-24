angular.module('wordsApp').service('mainService', function($http, $q){
    this.getRhymes = function(specific){
      return $http({
        method: 'GET',
        url: 'https://api.datamuse.com/words?rel_rhy='+ specific
      })
    }

});
