var context = this;

angular.module('angularSimpleSlider')
  .factory('SimpleSliderService', function () {

    'use strict';

    return typeof module != 'undefined' && module.exports ? // jshint ignore:line
      module.exports :
      context.SimpleSlider;
  });
