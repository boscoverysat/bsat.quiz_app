app.service('dbService', ['$cordovaSQLite', function($cordovaSQLite){
  'use strict';

  this.updateCorrectQuestions = function(newValue) {
    console.log('Updating value (Correct): ' + newValue);
    // TODO: Guardar en BBDD.
  };

  this.updateWrongQuestions = function(newValue) {
    console.log('Updating value (Wrong): ' + newValue);
    // TODO: Guardar en BBDD.
  };

  this.updateTotalQuestions = function(newValue) {
    console.log('Updating value (Total): ' + newValue);
    // TODO: Guardar en BBDD.
  };

  this.getCorrectQuestions = function() {
    // TODO: Obtener candidad desde BBDD.
    return 135;
  };

  this.getWrongQuestions = function() {
    // TODO: Obtener candidad desde BBDD.
    return 87;
  };

  this.getTotalQuestions = function() {
    // return 0;
    // TODO: Obtener candidad desde BBDD.
  };

  this.createDatabase = function() {
    // var db = $cordovaSQLite.openDB({name:'bsat', bgType: 1}),
    //     createTableQuery = 'CREATE TABLE IF NOT EXISTS questionCounter (id integer primary key, correct integer, wrong integer, total integer)',
    //     populateTableQuery = 'INSERT INTO questionCounter (id, correct, wrong, total) VALUES (1, 0, 0, 0)';

    // $cordovaSQLite.execute(db, createTableQuery, [])
    //               .then(
    //                 function(res) {
    //                   console.log('bsat DB correctly open and questionCounter table created.');
    //                 },
    //                 function(err) {
    //                   console.log('There was an error: ' + err);
    //                 }
    //               );
  };

  // db.executeSql("SELECT LENGTH('tenletters') AS stringlength", [], function (res) {
  //   console.log('got stringlength: ' + res.rows.item(0).stringlength);
  // }, function(error) {
  //   console.log('SELECT error: ' + error.message);
  // });
}]);
