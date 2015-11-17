app.service('chartService', function(){
  this.drawChart = function(correctQuestions, wrongQuestions) {
    console.log('Running start()');

    var data = [
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
        label: "Errores"
      }
    ];

    if (myNewChart) {
      console.log('Existe el chart');
      myNewChart.destroy();
    } else {
      console.log('NO Existe el chart');
    }

    var ctx = document.getElementById("scoreChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(data);
  };
});
