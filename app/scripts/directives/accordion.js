'use strict';

angular.module('angularDirectiveExpanderApp')
  .directive('accordion', [function () {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      template: '<div ng-transclude></div>',
      controller: [function() {
        var expanders = [];

        this.gotOpened = function(selectedExpander) {
          angular.forEach(expanders, function(expander) {
            if (selectedExpander !== expander) {
              expander.showMe = false;
            }
          });
        };

        this.addExpander = function(expander) {
          expanders.push(expander);
        };
      }]
    };
  }]);
