// app.controller('ScoreCtrl', function(myService) {
app.controller('ScoreCtrl', ['$scope', 'chartService', 'dbService', function($scope, chartService, dbService) {
  console.log('Cargando gráfica');

  $scope.correctQuestions = dbService.getCorrectQuestions();
  $scope.wrongQuestions = dbService.getWrongQuestions();
  $scope.totalQuestions = dbService.getTotalQuestions();

  chartService.drawChart($scope.correctQuestions, $scope.wrongQuestions);
}]);
