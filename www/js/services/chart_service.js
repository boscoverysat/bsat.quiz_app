app.service('myService', function(){
  this.sayHello = function() {
    console.log('myService is working fine');
  };
});

app.service('chartService', function(){
  this.drawChart = function() {
    console.log('Running start()');

    var data = [
      {
        value: 35,
        color:"#0f3",
        highlight: "#0f3",
        label: "Aciertos"
      },
      {
        value: 7,
        color: "#ef473a",
        highlight: "#ef473a",
        label: "Errores"
      }
    ];

    if (myNewChart) {
      console.log('Existe el chart');
      myNewChart.destroy();
    }
    else {
      console.log('NO Existe el chart');
    }

    var ctx = document.getElementById("scoreChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(data);
  };

});
