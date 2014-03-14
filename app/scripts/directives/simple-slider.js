angular.module('angularSimpleSlider')
  .directive('simpleSlider', ['SimpleSliderService', function (SimpleSliderService) {

    'use strict';

    return {

      restrict: 'E',
      scope: {},

      link: function postLink(scope, element, attrs) {

        scope.slider = new SimpleSliderService(element[0], attrs);

        attrs.$observe('change', function(value) {
          if (value) {
            scope.slider.change(value);
          }
        });

      }
    };
  }]);
