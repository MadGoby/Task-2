require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

class Slider {
  constructor(settings) {
    this.target = settings.target;
    this.options = settings.options;

    this.getHtmlElements();
    this.initialize();
  }

  getHtmlElements() {
    this.body = this.target.querySelector('.js-slider__body');
    this.output = this.target.querySelector('.js-slider__output');
  }

  static addPadding(outputValue) {
    const fixOutputValue = (value) => {
      if (value.length > 3) {
        return `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;
      }
      return value;
    };

    return fixOutputValue(outputValue);
  }

  initialize() {
    const { output } = this;

    $(this.body).slider(
      $.extend({},
        {
          slide(event, ui) {
            $(output).val(`${Slider.addPadding(String(ui.values[0]))}₽ - ${Slider.addPadding(String(ui.values[1]))}₽`);
          },
        }, this.options),
    );
    const from = String($(this.body).slider('values', 0));
    const to = String($(this.body).slider('values', 1));

    $(output).val(`${Slider.addPadding(from)}₽ - ${Slider.addPadding(to)}₽`);
  }
}

export { Slider };
