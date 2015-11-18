var bsatDB = angular.module('bsat.db.service', []);

bsatDB.factory('DBA', ['$cordovaSQLite', '$q', '$ionicPlatform', function($cordovaSQLite, $q, $ionicPlatform){
  'use strict';

  var self = this;

  // Handle query's and potential errors
  self.query = function (query, parameters) {
    parameters = parameters || [];
    var q = $q.defer();

    $ionicPlatform.ready(function () {
      $cordovaSQLite.execute(db, query, parameters)
        .then(function (result) {
          q.resolve(result);
        }, function (error) {
          console.warn('I found an error');
          console.warn(error);
          q.reject(error);
        });
    });
    return q.promise;
  }

  // Proces a result set
  // self.getAll = function(result) {
  self.getCounters = function(result) {
    var output = [];

    if (result.rows.length > 0) {
      output = angular.copy(result.rows.item(0));
    }

    return output;
  }

  return self;
}]);

bsatDB.factory('QuestionsDB', ['$cordovaSQLite', 'DBA', function($cordovaSQLite, DBA){
  var self = this;

  // self.get = function(memberId) {
  //   var parameters = [memberId];
  //   return DBA.query("SELECT id, name FROM team WHERE id = (?)", parameters)
  //     .then(function(result) {
  //       return DBA.getById(result);
  //     });
  // }

  // self.add = function(member) {
  //   var parameters = [member.id, member.name];
  //   return DBA.query("INSERT INTO team (id, name) VALUES (?,?)", parameters);
  // }

  // self.remove = function(member) {
  //   var parameters = [member.id];
  //   return DBA.query("DELETE FROM team WHERE id = (?)", parameters);
  // }

  // self.update = function(origMember, editMember) {
  //   var parameters = [editMember.id, editMember.name, origMember.id];
  //   return DBA.query("UPDATE team SET id = (?), name = (?) WHERE id = (?)", parameters);
  // }

  return self;
}]);

// Delete DB from browser Windows Vista or 7: \Users\_username_\AppData\Local\Google\Chrome\User Data\Default\databases

// Tutos:
// https://gist.github.com/borissondagh/29d1ed19d0df6051c56f
// http://ngcordova.com/docs/plugins/sqlite/
// https://github.com/driftyco/ng-cordova/blob/master/src/plugins/sqlite.js
// http://www.tutorialspoint.com/sqlite/index.htm
// http://sqlitestudio.pl/?act=download
