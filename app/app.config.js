'use strict';

angular.
  module('productApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/read', {
          template: '<read-product></read-product>'
        }).
        otherwise('/read');
    }
  ]);
