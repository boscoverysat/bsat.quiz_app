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
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
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
