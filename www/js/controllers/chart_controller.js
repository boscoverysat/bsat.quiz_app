// app.controller('ScoreCtrl', function(myService) {
app.controller('ScoreCtrl', ['myService', 'chartService', 'questionsService', function(myService, chartService, questionsService) {
  console.log('Cargando gráfica');

  myService.sayHello();

  chartService.drawChart();

  var questions = questionsService.getQuestions();

  console.log('Question 1 is: ' + questions[0].question);

  // $scope.$on('$ionicView.beforeEnter', function(event) {
  //   console.log('Arrancando puntuaciones');
  // });
}]);
