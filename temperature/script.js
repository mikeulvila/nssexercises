/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  [/]1. In the HTML, have one input field where someone can enter
      in a temperature.
  [/]2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  [/]3. Create a block level element that will hold the text of the
      converted temperature.
  [/]4. Create a button that, when clicked, displays the converted
      temperature.
  [/]5. Create another button that, when clicked, clears any text
      in the input field.
  [/]6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  [/]9. For any other temperature, the color should be green.
*/

function toCelsius (num) {
  var celsius = (num - 32) * (5 / 9);
  celsius = Math.round(10 * celsius) / 10;
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
var outputTemp = document.getElementById("output-temp");

// This function should determine which conversion should
// happen based on which radio button is selected.

function pickConverter() {
  var inputTemp = parseInt(document.getElementById("temp-input").value);
  console.log(inputTemp);
  var radioButtons = document.getElementsByName("scale");
  var radioVal;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioVal = radioButtons[i].value;
    }
  };
  console.log(radioVal);
  if (radioVal === "1") {
    outputTemp.value = toCelsius(inputTemp);
    if (outputTemp.value > 32) {
      outputTemp.className = "red";
    } else if (outputTemp.value < 0) {
      outputTemp.className = "blue";
    }
  }
  if (radioVal === "2") {
    outputTemp.value = toFahrenheit(inputTemp);
    if (outputTemp.value > 90) {
      outputTemp.className = "red";
    } else if (outputTemp.value < 32) {
      outputTemp.className = "blue";
    }
  }
}

// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", pickConverter);
clearButton.addEventListener("click", function() {
  document.getElementById("temp-input").value = "";
  outputTemp.value = "";
});
document.getElementById("temp-input").addEventListener("keyup", function() {
  if(event.keyCode === 13) {
    convertButton.click();
  }
});

// function tempFC(form) {
//   temp = form.temp.value;
//   if ((temp === null) || (temp === "") || (isNaN(temp))) {
//     form.answer.value="?";
//     form.show.value="?";
//     alert('Please enter a temperature with numbers only. Use a period for decimal place.');
//     form.temp.focus();
//     form.temp.select();
//     return false;
//   }
//   if (form.choice[0].checked) {
//     var answer = temp * 9 / 5 + 32;
//     var round = Math.round(10*answer) / 10;
//     var text1 = "°C = ";
//     var text2 = "°F";
//     var text3 = "°C multiplied by 9/5 +32 = ";
//     var text4 = "°F";
//     form.answer.value = temp + text1 + round + text2;
//     form.show.value = temp + text3 + round + text4;
//   }
//   if (form.choice[1].checked) {
//     var answer = (temp - 32) * 5 / 9;
//     var round=Math.round(10*answer)/10;
//     text0 = "(";
//     text1 = "°F = ";
//     text2 = "°C";
//     text3 = "°F - 32) multiplied by 5/9 = ";
//     text4 = "°C";
//     form.answer.value = temp + text1 + round + text2;
//     form.show.value = text0 + temp + text3 + round + text4;
//   }
// }




































