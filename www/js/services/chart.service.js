app.service('chartService', function(){
  'use strict';

  var ctx = document.getElementById("scoreChart").getContext("2d"),
      myNewChart = null;
      // myNewChart = null;

  this.drawChart = function(correctQuestions, wrongQuestions) {
    console.log('Running start()');

    console.log(correctQuestions + ', ' + wrongQuestions);

    var data = [
      {
        value: correctQuestions,
        // value: 10,
        color:"#0f3",
        highlight: "#0f3",
        label: "Aciertos"
      },
      {
        value: wrongQuestions,
        // value: 40,
        color: "#ef473a",
        highlight: "#ef473a",
        label: "Errores"
      }
    ];

    myNewChart = new Chart(ctx).Doughnut(data);

    // console.log(data[0].value + ', ' + data[1].value);

    // if (myNewChart) {
    //   console.log('Existe el chart');
    //   myNewChart.update();
    // } else {
    //   console.log('NO Existe el chart');
    //   // myNewChart = new Chart(ctx).Doughnut(data);
    // }
  };
});
