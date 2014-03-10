'use strict';

angular.module('angularSimpleSliderApp')
  .directive('simpleSlider', ['SimpleSliderService', function (SimpleSliderService) {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.slider = new SimpleSliderService(element[0]);
      }
    };
  }]);
