'use strict';

var app = angular.module('codemasterApp', [
    'ngRoute',
    'codemaster.controllers'
  ])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/views/home.html'
      }).
      when('/info', {
        controller: 'InfoCtrl',
        templateUrl: '/views/info.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
