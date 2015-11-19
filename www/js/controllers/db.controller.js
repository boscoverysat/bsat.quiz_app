app.controller('DBController', ['$rootScope', '$scope', '$cordobaSQLite', function($rootScope, $scope, $cordobaSQLite) {
  'use strict';

  var db = null,
      query = null;

  this.init = function() {
    if(window.cordova) {
      // App syntax
      db = $cordovaSQLite.openDB({ name: "boscoverysat.db", bgType: 1 });
    } else {
      // Ionic serve syntax
      db = window.openDatabase("boscoverysat.db", "1.0", "BoscoverySAT", 1000);
    }
  };

  $scope.getScores = function() {
    // this.init();

    // query = "SELECT * FROM questionCounter ORDER BY id LIMIT 1";

    // $cordovaSQLite
    //   .execute(db, query, [])
    //   .then(
    //     function(data) {
    //       console.log("Obtained data: " + JSON.stringify(data.rows));
    //     },
    //     function (err) {
    //       console.error("Error reading database. " + err);
    //     }
    //   );

    console.log('Getting DB scores');
  };

  // $scope.execute = function() {
  //   var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
  //   $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
  //     console.log("insertId: " + res.insertId);
  //   }, function (err) {
  //     console.error(err);
  //   });
  // };
}]);
