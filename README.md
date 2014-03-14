# Angular SimpleSlider

version: 0.0.0


## About

This **AngularJS** directive aims to provide a simple slider element for your application.


## Usage

To use the directive, simply import one of the `dist/` files into your html and initiate the `angularSimpleSliderApp` module.

The following example shows you how to configure a slider with 612x612 pixels using an fading animation:

```html
<simple-slider style="width:612px; height:612px" transition-property="opacity" start-value="0" visible-value="1" end-value="0">
  <img src="http://placekitten.com/g/612/612"/>
  <img src="http://distilleryimage5.s3.amazonaws.com/de66967ac72111e2a23222000aaa0537_7.jpg"/>
  <img src="http://distilleryimage8.s3.amazonaws.com/a042749ac72111e28c3c22000a1fb85a_7.jpg"/>
  <img src="http://distilleryimage4.s3.amazonaws.com/8d32600ec72111e29f1422000a1fbc0e_7.jpg"/>
</simple-slider>
```


## Examples

Many others examples of using can be found on the [app/views/main.html](https://github.com/ruyadorno/angular-simple-slider/blob/master/app/views/main.html) file in this repository.


## More info

This project is a simple directive implementation of [SimpleSlider](http://ruyadorno.github.io/SimpleSlider/). Please visit its page for more information.


## License

MIT

