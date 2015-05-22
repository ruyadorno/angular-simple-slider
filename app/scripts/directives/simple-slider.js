angular.module('angularSimpleSlider')
  .directive('simpleSlider', ['SimpleSliderService', '$timeout', function (SimpleSliderService, $timeout) {

    'use strict';

    return {

      restrict: 'AE',
      scope: {
        onChange: '&',
        slide: '=?simpleSliderSlide',
        slider: '=?simpleSlider'
      },

      link: function postLink(scope, element, attrs) {
        var options = attrs;

        if (attrs.onChange) {
          options.onChange = scope.onChange;
        } else {
          options.onChange = function () {
            if (scope.slide !== scope.slider.actualIndex) {
              $timeout(function () {
                scope.$apply(function () {
                  scope.slide = scope.slider.actualIndex;
                });
              });
            }
          };
        }

        if (element[0].children.length === 0) {
          scope.$watch(function () {
            return element[0].children.length > 0;
          }, function (hasChildren) {
            if (hasChildren) {
              scope.slider = new SimpleSliderService(element[0], options);
            }
          });
        } else {
          scope.slider = new SimpleSliderService(element[0], options);
        }

        scope.$watch('slide', function(next, prev) {
          if (next && next !== prev) {
            scope.slider.change(next);
            scope.slide = next;
          }
        });

      }
    };
  }]);
