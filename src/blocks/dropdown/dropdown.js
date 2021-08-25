export default function dropdownFunctionality(settings) {
  const { inputClass, dropdownClass, inputResultTemplate, defaultTemplate } = settings;

  function getHtmlElements() {
    const input = document.querySelector(inputClass);
    const dropdown = document.querySelector(dropdownClass);
    return { input, dropdown };
  }

  const resultElements = getHtmlElements();
  const { input, dropdown } = resultElements;
  const dropdownButtons = [...dropdown.querySelectorAll('button')];
  const defaultValues = [0, 0, 0];

  function checkClearButtonVisibility() {
    let a = 0;

    [...dropdown.querySelectorAll('output')].forEach((output) => {
      a += Number(output.innerText);
    });

    dropdownButtons.forEach((button) => {
      if (button.getAttribute('data-target') === 'clear' && a > 0) button.removeAttribute('hidden');
    });
  }

  function discloseDropdown() {
    if (dropdown.hasAttribute('hidden')) {
      dropdown.removeAttribute('hidden');
      input.classList.add('input__field_expanded');
    } else {
      dropdown.setAttribute('hidden', 'hidden');
      input.classList.remove('input__field_expanded');
    }
  }

  function implementsButtonsFunctionality(event) {
    const button = event.target;

    function definesModifiesOutput(elem) {
      const target = elem.getAttribute('data-target');

      function getDesiredOutput(targOut) {
        let result;

        [...dropdown.querySelectorAll('output')].forEach((out) => {
          if (out.getAttribute('data-target') === targOut) {
            result = out;
          }
        });

        return result;
      }

      const output = getDesiredOutput(target);
      const action = button.getAttribute('data-action');

      function checkAdditionPossinility(addAction) {
        return addAction === 'plus' && Number(output.innerText) < 10;
      }

      function checkSubtractionPossinility(subAction) {
        return subAction === 'minus' && Number(output.innerText) > 0;
      }

      function isButtonTransparent(transfButton, transfAction) {
        return (
          transfButton.classList.contains('dropdown__button_transparent') &&
          transfButton.getAttribute('data-action') === transfAction &&
          transfButton.getAttribute('data-target') === target
        );
      }

      function removeTransparentClass(removeAction, num, removeTarget) {
        if (Number(output.innerText) === num) {
          [...dropdown.querySelectorAll('button')].forEach((removeButtons) => {
            if (isButtonTransparent(removeButtons, removeAction, removeTarget)) {
              removeButtons.classList.remove('dropdown__button_transparent');
            }
          });
        }
      }

      if (checkAdditionPossinility(action)) {
        if (Number(output.innerText) === 0) {
          const currTarget = button.getAttribute('data-rarget');
          removeTransparentClass('minus', 0, currTarget);
        }
        output.innerText = Number(output.innerText) + 1;
        input.setAttribute(`data-${target}`, output.innerText);
        if (Number(output.innerText) === 10) {
          button.classList.add('dropdown__button_transparent');
        }
      } else if (checkSubtractionPossinility(action)) {
        if (Number(output.innerText) === 10) {
          const currTarget = button.getAttribute('data-rarget');
          removeTransparentClass('plus', 10, currTarget);
        }
        output.innerText = Number(output.innerText) - 1;
        input.setAttribute(`data-${target}`, output.innerText);
        if (Number(output.innerText) === 0) {
          button.classList.add('dropdown__button_transparent');
        }
      }
    }

    function refreshInput(inputForRefreshing) {
      function getOutputValues() {
        const result = [];

        [...dropdown.querySelectorAll('output')].forEach((output) => {
          result.push(Number(output.innerText));
        });

        return result;
      }

      const outputVal = getOutputValues();

      function setToZero(arr) {
        return arr.every((val) => val === 0);
      }

      if (setToZero(outputVal)) {
        inputForRefreshing.setAttribute('value', defaultTemplate);

        dropdownButtons.forEach((zeroButton) => {
          if (zeroButton.getAttribute('data-action') === 'minus') {
            zeroButton.classList.add('dropdown__button_transparent');
          }

          if (
            zeroButton.getAttribute('data-action') === 'plus' &&
            zeroButton.classList.contains('dropdown__button_transparent')
          ) {
            zeroButton.classList.remove('dropdown__button_transparent');
          }

          if (zeroButton.getAttribute('data-target') === 'clear') zeroButton.setAttribute('hidden', 'hidden');
        });
      } else {
        dropdownButtons.forEach((simpButton) => {
          if (simpButton.getAttribute('data-target') === 'clear') simpButton.removeAttribute('hidden');
        });

        let result = '';
        if (inputResultTemplate.type === 'oneByOne') {
          for (let i = 0; i < outputVal.length; i += 1) {
            if (
              inputResultTemplate.values.length < outputVal.length &&
              i === Number(inputResultTemplate.values.length - 1)
            ) {
              result += `${outputVal[i]} ${inputResultTemplate.values[i]}...`;
              break;
            } else {
              result += `${outputVal[i]} ${inputResultTemplate.values[i]}, `;
            }
          }
        } else if (inputResultTemplate.type === 'sum') {
          outputVal.forEach((value) => {
            result = Number(result) + value;
          });

          result = `${String(result)} ${String(inputResultTemplate.values)}`;
        } else if (inputResultTemplate.type === 'twoByOne') {
          for (let i = 0; i < outputVal.length; i += 1) {
            if (
              inputResultTemplate.values.length < outputVal.length &&
              i === Number(inputResultTemplate.values.length - 1)
            ) {
              result += `${outputVal[i + 1]} ${inputResultTemplate.values[i]}`;
              break;
            } else {
              result += `${outputVal[i] + outputVal[i + 1]} ${inputResultTemplate.values[i]}, `;
            }
          }
        }
        inputForRefreshing.setAttribute('value', result);
      }
    }

    function setDefaultValues(container) {
      const outputs = [...container.querySelectorAll('output')];
      let i = 0;

      outputs.forEach((outputForEditing) => {
        const output = outputForEditing;
        output.innerText = defaultValues[i];
        i += 1;
      });
    }

    if (button.getAttribute('data-target') === 'clear') {
      setDefaultValues(dropdown);
      refreshInput(input);
      button.setAttribute('hidden', 'hidden');
    } else if (button.getAttribute('data-target') === 'submit') {
      discloseDropdown();
    } else {
      definesModifiesOutput(button);
      refreshInput(input);
    }
  }

  function bindEventListeners() {
    input.addEventListener('click', discloseDropdown);
    dropdownButtons.forEach((button) => {
      button.addEventListener('click', implementsButtonsFunctionality);
    });
  }

  checkClearButtonVisibility();
  bindEventListeners();
}