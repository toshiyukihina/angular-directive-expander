'use strict';

angular.module('angularDirectiveExpanderApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.title = 'Click to show';
    $scope.text = 'Hello everybody! Now shown.';
  }]);
