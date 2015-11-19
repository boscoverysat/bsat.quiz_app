app.service('dbService', ['$cordovaSQLite', '$q', function($cordovaSQLite, $q){
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

  this.getScores = function() {
    console.log('Getting DB scores');

    var q = $q.defer();

    this.init();

    query = "SELECT * FROM questionCounter ORDER BY id LIMIT 1";

    $cordovaSQLite
      .execute(db, query, [])
      .then(
        function(data) {
          console.log('Resutls: ' + JSON.stringify(data.rows.item(0)));

          q.resolve(data);
        },
        function (err) {
          console.error("Error reading database. " + err);
          q.reject(error);
        }
      );

    return q.promise;
  };

  this.updateCorrectQuestions = function(newCorrect, newTotal) {
    console.log('Updating Correct and Total questions.');

    var q = $q.defer();

    this.init();

    query = "UPDATE questionCounter SET correct = (?), total = (?) WHERE id = 1";

    $cordovaSQLite.execute(db, query, [newCorrect, newTotal]);
  };

  this.updateWrongQuestions = function(newWrong, newTotal) {
    console.log('Updating Wrong and Total questions.');

    var q = $q.defer();

    this.init();

    query = "UPDATE questionCounter SET wrong = (?), total = (?) WHERE id = 1";

    $cordovaSQLite.execute(db, query, [newWrong, newTotal]);
  };
}]);
