//Lab 7: Functions
//Author: Victoria White <vwhite@csumb.edu>
//Created: Feb. 27 2021
//License: Public Domain

//define function
function isEven (x){
  return (x % 2 == 0);
}
console.log("Lets test our 'isEven' function: ");

//test function
console.log("Is 4 even? ", isEven(4));
console.log("Is 7 even? ", isEven(7));

//define array
var array = [2, 12, 3, 13, 4, 17];
console.log("Here is our array: ", array);

//run array through function, sould return [true, true, false, false, true, false]
var result = array.map(isEven);
console.log("Are the numbers in our array even? ", result);

//run calculation through Array sould return [4, 144, 9, 169, 16, 289]
var result = array.map(function(x){
  return x**2;
})
console.log("Lets get the square of the array: ", result);
