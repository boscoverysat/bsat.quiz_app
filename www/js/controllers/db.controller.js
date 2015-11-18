app.controller('DBController', ['$rootScope', '$scope', '$cordobaSQLite', function($rootScope, $scope, $cordobaSQLite) {
  'use strict';

  var db = $cordovaSQLite.openDB({ name: "bsat.db", bgType: 1 });

  $scope.init = function() {
    var query = "CREATE TABLE IF NOT EXISTS questionCounter (id integer primary key, correct integer, wrong integer, total integer)";
    $cordovaSQLite
      .execute(db, query, [])
      .then(
        function() {
          console.log("Table create correctly.");
        },
        function (err) {
          console.error(err);
        }
      );
  };

  $rootScope.initDB = function(source) {
    console.log('Initiating DB from ' + source);
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
