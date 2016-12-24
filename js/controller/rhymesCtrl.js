angular.module('wordsApp').controller('rhymesCtrl', function($scope,mainService){
  $scope.getRhymes = function(){
    mainService.getRhymes($scope.specific).then(function(res){
      $scope.rhymes = res.data
    })

    }
  // $scope.getRhymes()
});
