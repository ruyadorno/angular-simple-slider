'use strict';

angular.module('angularSimpleSliderApp')
  .directive('simpleSlider', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.slider = new window.SimpleSlider(element[0]);
      }
    };
  });
