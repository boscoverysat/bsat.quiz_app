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
}]);
