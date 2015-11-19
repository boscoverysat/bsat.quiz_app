app.service('chartService', function(){
  'use strict';

  var ctx = null,
      data = null,
      myNewChart = null;

  this.drawChart = function(correctQuestions, wrongQuestions) {
    if (myNewChart) {
      myNewChart.segments[0].value = correctQuestions;
      myNewChart.segments[1].value = wrongQuestions;
      myNewChart.update();
    } else {
      ctx = document.getElementById("scoreChart").getContext("2d"),

      data = [
        {
          value: correctQuestions,
          color:"#0f3",
          highlight: "#0f3",
          label: "Aciertos"
        },
        {
          value: wrongQuestions,
          color: "#ef473a",
          highlight: "#ef473a",
          label: "Fallos"
        }
      ];

      myNewChart = new Chart(ctx).Doughnut(data);
    }
  };
});
