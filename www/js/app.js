// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var db = null;

var app = angular.module('starter', ['ionic', 'mainController', 'bsat.db.service', 'ngCordova']);

app.run(function($ionicPlatform, $timeout, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // $timeout(function() {
      console.log('Creatin DB');

      var query = "CREATE TABLE IF NOT EXISTS questionCounter (id integer primary key, correct integer, wrong integer, total integer)";

      if(window.cordova) {
        // App syntax
        db = $cordovaSQLite.openDB({ name: "bsat.db", bgType: 1 });
      } else {
        // Ionic serve syntax
        db = window.openDatabase("boscoverysat.db", "1.0", "BoscoverySAT", 1000);
      }

      $cordovaSQLite
        .execute(db, query, [])
        .then(
          function() {
            console.log("Table create correctly.");

            query = "INSERT INTO questionCounter (correct, wrong, total) VALUES (0, 0, 0)";

            $cordovaSQLite
              .execute(db, query, [])
              .then(
                function() {
                  console.log("Data inserted correctly.");
                },
                function (err) {
                  console.error(err);
                }
              );
          },
          function (err) {
            console.error(err);
          }
        );
    // }, 2000);


    // if(window.cordova) {
    //   // App syntax
    //   db = $cordovaSQLite.openDB("boscoverysat.db");
    //   console.log('Creating DB by App');
    // } else {
    //   // Ionic serve syntax
    //   db = window.openDatabase("boscoverysat.db", "1.0", "BoscoverySAT", -1);
    //   console.log('Creating DB by Browser');
    // }

    // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS questionCounter (id integer primary key, correct integer, wrong integer, total integer)")
    //               .then(
    //                 function() {
    //                   $cordovaSQLite.execute(db, "INSERT INTO questionCounter (id, correct, wrong, total) VALUES (1, 0, 0, 0)");
    //                 },
    //                 function(err) {
    //                   console.log(err);
    //                 }
    //               );

  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
      // controller: 'AppCtrl'
    })
    .state('app.introduction', {
      url: '/introduction',
      views: {
        'menuContent': {
          templateUrl: 'templates/introduction.html',
          controller: ''
        }
      }
    })
    .state('app.quiz', {
      // cache: false,
      url: '/quiz',
      views: {
        'menuContent': {
          templateUrl: 'templates/quiz.html',
          controller: 'QuestionsController'
        }
      }
    })
    .state('app.score', {
      cache: false,
      url: '/score',
      views: {
        'menuContent': {
          templateUrl: 'templates/score.html',
          controller: 'ScoreCtrl'
        }
      }
    })
    .state('app.project', {
      url: '/project',
      views: {
        'menuContent': {
          templateUrl: 'templates/project.html'
        }
      }
    })
    .state('app.info', {
      url: '/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html',
          controller: ''
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/introduction');
});
