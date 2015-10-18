/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted
      temperature.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

function toCelsius (num) {
  var celsius = (num - 32) * (5 / 9);
  return celsius
}
console.log(toCelsius(87));

function toFahrenheit (num) {
  var fahrenheit = (num * (9 / 5)) + 32;
  return fahrenheit
}
console.log(toFahrenheit(80));

// Get a reference to the button element in the DOM
var convertButton = document.getElementById("convert-button");
var clearButton = document.getElementById("clear-button");
var convertedTemp = document.getElementById("converted-temp");

// This function should determine which conversion should
// happen based on which radio button is selected.

function pickConverter() {
  var radioButtons = document.getElementsByName("scale");
  var radioVal;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked.) {
      radioVal = radioButtons[i].value;
      break;
    }
  };
  console.log(radioVal);
}

// console.log("radio-value", determineConverter());
  // console.log("event", clickEvent);
// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", pickConverter);
