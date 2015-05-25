angular.module('angularSimpleSlider')
  .directive('simpleSlider', ['SimpleSliderService', '$timeout', function (SimpleSliderService, $timeout) {

    'use strict';

    return {

      restrict: 'AE',
      scope: {
        onChange: '&',
        current: '=?currentSlide',
        slider: '=?sliderInstance'
      },

      link: function postLink(scope, element, attrs) {
        var options = attrs, watcher;

        if (attrs.onChange) {
          options.onChange = scope.onChange;
        } else {
          options.onChange = function (prev, next) {
            if (parseInt(scope.current) !== next) {
              $timeout(function () {
                scope.$apply(function () {
                  scope.current = next;
                });
              });
            }
          };
        }

        if (element[0].children.length === 0) {
          watcher = scope.$watch(function () {
            return element[0].children.length > 0;
          }, function (hasChildren) {
            if (hasChildren) {
              scope.slider = new SimpleSliderService(element[0], options);
              watcher();
            }
          });
        } else {
          scope.slider = new SimpleSliderService(element[0], options);
        }

        scope.$watch('current', function(next, prev) {
          if (next && next !== prev) {
            scope.slider.change(parseInt(next));
          }
        });

      }
    };
  }]);
