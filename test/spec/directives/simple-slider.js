'use strict';

describe('Directive: simpleSlider', function () {

  // load the directive's module
  beforeEach(module('angularSimpleSliderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-slider></simple-slider>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the simpleSlider directive');
  }));
});
