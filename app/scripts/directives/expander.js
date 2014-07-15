'use strict';

angular.module('angularDirectiveExpanderApp')
  .directive('expander', ['$log', function ($log) {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      require: '^?accordion',
      scope: { title: '=expanderTitle' },
      template: '<div>' +
        '<div class="title" ng-click="toggle()">{{title}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
      link: function(scope, element, attrs, accordionController) {
        $log.debug('* postLink');
        scope.showMe = false;
        accordionController.addExpander(scope);
        scope.toggle = function() {
          $log.debug('* toggle@postLink');
          scope.showMe = !scope.showMe;
          accordionController.gotOpened(scope);
        };
      }
    };
  }]);
