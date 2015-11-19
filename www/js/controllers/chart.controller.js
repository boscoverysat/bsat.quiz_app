app.controller('ScoreCtrl', ['$scope', 'chartService', 'dbService', function($scope, chartService, dbService) {
  'use strict';

  console.log('Cargando gráfica');

  $scope.$on('$ionicView.beforeEnter', function() {
    dbService
      .getScores()
      .then(
        function(result) {
          var scores =  result.rows.item(0);

          $scope.correctQuestions = scores.correct;
          $scope.wrongQuestions = scores.wrong;
          $scope.totalQuestions = scores.total;

          chartService.drawChart($scope.correctQuestions, $scope.wrongQuestions);
        }
      );
  });
}]);
