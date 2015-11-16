// app.controller('ScoreCtrl', function(myService) {
app.controller('ScoreCtrl', ['myService', 'chartService', 'questionsService', function(myService, chartService, questionsService) {
  console.log('Cargando gráfica');

  myService.sayHello();

  chartService.drawChart();

  var questions = questionsService.getQuestions();

  console.log('Question 1 is: ' + questions[0].question);

  // $scope.onClick1 = function() {
  //   deselect();
  //   div1.attr("class","selectedRadial");
  // };

  // $scope.labelFunction = function(val,min,max) {

  // };

  // $scope.deselect = function() {
  //   div1.attr("class","radial");
  // };

  // this.start = function() {
  //   console.log('Running start()');

  //   var data = [
  //     {
  //       value: 300,
  //       color:"#F7464A",
  //       highlight: "#FF5A5E",
  //       label: "Red"
  //     },
  //     {
  //       value: 50,
  //       color: "#46BFBD",
  //       highlight: "#5AD3D1",
  //       label: "Green"
  //     },
  //     {
  //       value: 100,
  //       color: "#FDB45C",
  //       highlight: "#FFC870",
  //       label: "Yellow"
  //     }
  //   ];

  //   if (myNewChart) {
  //     console.log('Existe el chart');
  //     myNewChart.destroy();
  //   }
  //   else {
  //     console.log('NO Existe el chart');
  //   }

  //   var ctx = document.getElementById("scoreChart").getContext("2d");
  //   var myNewChart = new Chart(ctx).Doughnut(data);
  // };

  // this.start();
}]);
