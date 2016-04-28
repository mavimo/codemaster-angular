'use strict';

var app = angular.module('codemasterApp', [
    'ngRoute',
    'codemaster.controllers'
  ])

app.constant('codemasterConfig', {
    'apiKey' : 'INSERT_CONFIG_HERE',
    'baseUrl' : 'https://api.themoviedb.org/3',

    getWebServiceUrl: function (info) {
      return this.baseUrl + info + '?language=IT&api_key=' + this.apiKey;
    }
  })

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/views/home.html'
      }).
      when('/generi', {
        controller: 'GeneriCtrl',
        templateUrl: '/views/generi.html'
      }).
      when('/generi/:id', {
        controller: 'GenereCtrl',
        templateUrl: '/views/genere.html'
      }).
      when('/info', {
        controller: 'InfoCtrl',
        templateUrl: '/views/info.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
