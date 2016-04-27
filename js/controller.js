'use strict';

/* Directives */
angular.module('codemaster.controllers', [])
  .controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.titolo = "HOME";
    $scope.messaggio = "Benvenuto nella nostra app!";
  }])
  .controller('InfoCtrl', ['$scope', function ($scope) {
    $scope.titolo = "INFO";
    $scope.messaggio = "Informazioni sulla nostra app!";
  }]);
