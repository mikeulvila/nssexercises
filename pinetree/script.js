/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.
// var tree = function(height) {
//   for (var i = 0; i < height; i++) {
//     for (var j = 0;)
//   }

// };

// tree(7);
function tree(number) {
    
    var count = 1;
    var spaceCount = ((number + (number - 1)) - 1) / 2;

    //Number of rows
    for (var i = 0; i < number; i++) {
        //Set row variable
        var row = "";

        //Print each row's spaces
        for (var k = 0; k < spaceCount; k++) {
            var row = row + (" ");
        }

        //Print each row's stars
        for (var j = 0; j < count; j++) {
            var row = row + ("*");
        }

        count += 2;
        spaceCount -= 1;
        console.log(row);
    }
}

tree(5);

var tree = function(height) {
 var pinetree = [];
 pinetree[height] = "*";
 console.log(pinetree.indexOf("*"));
 for (var j = 0; j < pinetree.length; j++) {
   pinetree[j] = " ";

 }
 for (var i = 0; i < height; i++) {
   pinetree[height-i] = "*";
   pinetree[height+i] = "*";

   var pineOutput = pinetree.join("");
   console.log(pineOutput);
 }
}; 
tree(10);


















