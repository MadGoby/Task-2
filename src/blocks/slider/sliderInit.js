require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

function initialize() {
  function addPadding(outputStr) {
    let value = outputStr;

    if (value.length > 3) {
      value = `${value.slice(0, value.length - 3)} ${value.slice(value.length - 3)}`;
    }

    return value;
  }

  const $sliderBody = $('.js-slider__body');
  const $sliderOutput = $('.js-slider__output');

  $sliderBody.slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide(event, ui) {
      $sliderOutput.val(`${addPadding(String(ui.values[0]))}₽ - ${addPadding(String(ui.values[1]))}₽`);
    },
  });

  const from = String($sliderBody.slider('values', 0));
  const to = String($sliderBody.slider('values', 1));

  $sliderOutput.val(`${addPadding(from)}₽ - ${addPadding(to)}₽`);
}

document.addEventListener('DOMContentLoaded', initialize);
