//***************ADD EVENT LISTENERS TO EACH BUTTON************
// document.getElementById("add").addEventListener("click", function () {
// 	console.log("working");
// });
// document.getElementById("subtract").addEventListener("click", function () {
// 	console.log("working");
// });
// document.getElementById("multiply").addEventListener("click", function () {
// 	console.log("working");
// });
// document.getElementById("divide").addEventListener("click", function () {
// 	console.log("working");
// });

document.querySelector("body").addEventListener("click", function(event) {
	var number1 = parseInt(document.getElementById("num1").value);
	var number2 = parseInt(document.getElementById("num2").value);
  console.log("event", event);
  if (event.target.id === "add") {
  	console.log("made it this far");
	document.getElementById("result").value = performCalc(number1, number2, addNumbers);
  }
  if (event.target.id === "subtract") {
  	console.log("made it this far");
	document.getElementById("result").value = performCalc(number1, number2, subtractNumbers);
  }
  if (event.target.id === "multiply") {
  	console.log("made it this far");
	document.getElementById("result").value = performCalc(number1, number2, multiplyNumbers);
  }
  if (event.target.id === "divide") {
  	console.log("made it this far");
	document.getElementById("result").value = performCalc(number1, number2, divideNumbers);
  }
})

  //Create a function that multiplies two numbers
  //passed in as arguments. Return the product.
function multiplyNumbers(num1, num2) {
	return num1 * num2
}

  //Create a function that adds two numbers
  //passed in as arguments. Return the sum.
function addNumbers(num1, num2) {
	return num1 + num2
}

  //Create a function that subtracts two numbers
  //passed in as arguments. Return the difference.
function subtractNumbers(num1, num2) {
	return num1 - num2
}

  //Create a function that divides two numbers
  //passed in as arguments. Return the quotient.
function divideNumbers(num1, num2) {
	return num1 / num2
}

  //Create a function that accepts three arguments.
    /*1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.*/
function performCalc(num1, num2, operation) {
	return operation(num1, num2)
}













