function dropdownFunctionality(settings) {
  const {
    inputClass,
    dropdownClass,
    inputResultTemplate,
    defaultTemplate,
  } = settings;
  
  function getHtmlElements() {
    const input = document.querySelector(inputClass);
    const dropdown = document.querySelector(dropdownClass);
    return {input, dropdown}
  };

  function writeDefaultValues(dropdown) {
    const defaultValues = [];

    let outputs = [...dropdown.querySelectorAll("output")];
    outputs.map(function(output) {
      defaultValues.push(output.innerText)  
    })
    
    return defaultValues;
  };

  const resultElements = getHtmlElements();
  const {input, dropdown} = resultElements;
  const dropdownButtons = [...dropdown.querySelectorAll("button")];
  const defaultValues = writeDefaultValues(dropdown);

  function bindEventListeners() {
    input.addEventListener("click", discloseDropdown);
    dropdownButtons.map(function(button) {
      button.addEventListener("click", implementsButtonsFunctionality)
    })
  };

  function discloseDropdown(event) {
    if(dropdown.hasAttribute("hidden")) {
      dropdown.removeAttribute("hidden");
      input.parentNode.parentNode.parentNode.classList.add("dropdown__input_expanded");
    } else {
      dropdown.setAttribute("hidden", "hidden");
      input.parentNode.parentNode.parentNode.classList.remove("dropdown__input_expanded");
    };
  };

  function implementsButtonsFunctionality(event) {
    const button = event.target;

    function definesModifiesOutput(button) {
      const target = button.getAttribute("data-target");

      function getDesiredOutput(target) {
        let result;
        [...dropdown.querySelectorAll("output")].map(function(out) {
          if(out.getAttribute("data-target") == target) {result = out};
        });
        return result;
      };

      const output = getDesiredOutput(target);
      const action = button.getAttribute("data-action");

      function checkAdditionPossinility(action) {
        return (action === "plus") && (Number(output.innerText) < 10)
      };
      function checkSubtractionPossinility(action) {
        return (action === "minus") && (Number(output.innerText) > 0)
      };
      function isButtonTransparent(button, action) {
        return (button.classList.contains("dropdown__button_transparent")) && (button.getAttribute("data-action") == action && button.getAttribute("data-target") == target);
      };

      function removeTransparentClass(action, num, target) {
        if(Number(output.innerText) == num) {
          [...dropdown.querySelectorAll("button")].map(function(button) {
            if(isButtonTransparent(button, action, target)) {
              button.classList.remove("dropdown__button_transparent");
            };
          });
        };
      };

      if(checkAdditionPossinility(action)) {
        if(Number(output.innerText) == 0) {
          const target = button.getAttribute("data-rarget");
          removeTransparentClass("minus", 0, target);
        };
        output.innerText = Number(output.innerText) + 1;
        input.setAttribute(`data-${target}`, output.innerText);
        if(Number(output.innerText) == 10) {
          button.classList.add('dropdown__button_transparent');
        };
      } else if (checkSubtractionPossinility(action)) {
        if(Number(output.innerText) == 10) {
          const target = button.getAttribute("data-rarget");
          removeTransparentClass("plus", 10, target);
        };
        output.innerText = Number(output.innerText) - 1;
        input.setAttribute(`data-${target}`, output.innerText);
        if(Number(output.innerText) == 0) {
          button.classList.add('dropdown__button_transparent');
        };
      };
    };
    
    function refreshInput(input) {
      function getOutputValues() {
        let result = [];
        let i = 1;
        [...dropdown.querySelectorAll("output")].map(function(output) {
          result.push(Number(output.innerText));
          i++;
        });
        return result;
      }
  
      const outputVal = getOutputValues();
  
      function setToZero(arr) {
        return arr.every(function(val) {
          return val == 0}
        );
      };
      
      if(setToZero(outputVal)) {
        input.setAttribute("value", defaultTemplate);
        dropdownButtons.map(function(button) {
          if (button.getAttribute("data-action") === 'minus') button.classList.add('dropdown__button_transparent');
        });
      } else {
        dropdownButtons.map(function(button) {
          if (button.getAttribute("data-target") === 'clear') button.removeAttribute("hidden")
        });

        let result = "";
        if(inputResultTemplate.type === 'oneByOne') {
          for(let i = 0; i < outputVal.length; i++) {
            if (inputResultTemplate.values.length < outputVal.length && i == Number(inputResultTemplate.values.length - 1)) {
              result += `${outputVal[i]} ${inputResultTemplate.values[i]}...`
              break
            } else {
              result += `${outputVal[i]} ${inputResultTemplate.values[i]}, `
            };
          };
        } else if(inputResultTemplate.type === 'sum') {
          outputVal.map(function(value) {
            result = Number(result) + value;
          });
          result = String(result) + " " + String(inputResultTemplate.values)
        } else if(inputResultTemplate.type === 'twoByOne') {
          for(let i = 0; i < outputVal.length; i++) {
            if (inputResultTemplate.values.length < outputVal.length && i == Number(inputResultTemplate.values.length - 1)) {
              result += `${outputVal[i + 1]} ${inputResultTemplate.values[i]}`
              break
            } else {
              result += `${outputVal[i] + outputVal[i + 1]} ${inputResultTemplate.values[i]}, `
            };
          };
        }
        input.setAttribute("value", result);
      }
    };

    function setDefaultValues(dropdown) {
      let outputs = [...dropdown.querySelectorAll("output")];
      let i = 0;
      outputs.map(function(output) {
        output.innerText = defaultValues[i];
        i++
      });
    }

    if (button.getAttribute("data-target") === "clear") {
      setDefaultValues(dropdown)
      refreshInput(input);
      button.setAttribute("hidden", "hidden")
    } else if (button.getAttribute("data-target") === "submit") {
      discloseDropdown()
    } else {
      definesModifiesOutput(button);
      refreshInput(input);
    };
  };
  bindEventListeners();
};

export {dropdownFunctionality};