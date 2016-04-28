'use strict';

/* Directives */
angular.module('codemaster.controllers', [])
  .controller('GeneriCtrl', ['$scope', '$http', 'codemasterConfig', function ($scope, $http, config) {
    $scope.titolo = "Elenco generi";
    $scope.genres = [];
    $scope.error = false;

    $http({
      method: 'GET',
      url: config.getWebServiceUrl('/genre/movie/list')
    }).then(function success(response) {
        $scope.genres = response.data.genres;
      }, function error(response) {
        $scope.error = true;
      });
  }])

  .controller('GenereCtrl', ['$scope', '$routeParams', '$http', 'codemasterConfig', function ($scope, $routeParams, $http, config) {
    $scope.titolo = '';
    $scope.movies = [];
    $scope.error = false;

    $http({
      method: 'GET',
      url: config.getWebServiceUrl('/genre/' + $routeParams.id + '/movies')
    }).then(function success(response) {
        $scope.movies = response.data.results;
      }, function error(response) {
        $scope.error = true;
      });
  }])

  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.titolo = "HOME";
    $scope.messaggio = "Benvenuto nella nostra app!";
  }])
  .controller('InfoCtrl', ['$scope', function ($scope) {
    $scope.titolo = "INFO";
    $scope.messaggio = "Informazioni sulla nostra app!";
  }]);
