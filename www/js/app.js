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

    console.log('Creatin DB');

    var query = null;

    if(window.cordova) {
      // App syntax
      db = $cordovaSQLite.openDB({ name: "boscoverysat.db", bgType: 1 });
    } else {
      // Ionic serve syntax
      db = window.openDatabase("boscoverysat.db", "1.0", "BoscoverySAT", 1000);
    }

    query = "CREATE TABLE IF NOT EXISTS questionCounter (id integer primary key, correct integer, wrong integer, total integer)";

    $cordovaSQLite
      .execute(db, query, [])
      .then(
        function() {
          console.log("Table create correctly.");

          query = "SELECT COUNT(*) AS quantity FROM questionCounter";

          $cordovaSQLite
            .execute(db, query, [])
            .then(
              function(data) {
                console.log("Data result: " + JSON.stringify(data.rows.item(0).quantity));

                if (data.rows.item(0).quantity === 0) {
                  console.log('Database already initialized.');

                  query = "INSERT INTO questionCounter (correct, wrong, total) VALUES (0, 0, 0)";

                  $cordovaSQLite
                    .execute(db, query, [])
                    .then(
                      function() {
                        console.log("Database correctly initialized.");
                      },
                      function (err) {
                        console.error("Error initializing database. " + err);
                      }
                    );
                }
              },
              function (err) {
                console.error("Error counting stored records. " + err);
              }
            );
        },
        function (err) {
          console.error("Error creating table. " + err);
        }
      );
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
