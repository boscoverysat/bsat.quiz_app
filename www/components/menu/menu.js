angular.module('menu', [])

.config(function($stateProvider) {
  $stateProvider
    .state('option_1', {
      url: "/option_1",
      views: {
        'menuContent' : {
          'templateUrl' : 'components/menu/menu.html',
          'controller' : 'MenuController'
        }
      }
    })
  ;
})

.controller('MenuController', function($scope){

})
