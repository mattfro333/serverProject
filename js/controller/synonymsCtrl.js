angular.module('wordsApp').controller('synonymsCtrl', function($scope,mainService){
    $scope.getSynonyms = function(){
      mainService.getSynonyms($scope.nom).then(function(res){
        $scope.synonyms = res.data
      })
    }
});
