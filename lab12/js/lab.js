//Lab 12: loops
//Author: Victoria White <vwhite@csumb.edu>
//Created: Mar. 10 2021
//License: Public Domain

//given a number and an object that looks like this
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
// Loops over the numbers and outputs the number and the matching text
// for factors
function fizzBuzzBoom(maxNums, factorObj) {
  //iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    //reset output string
    var outputStr = "";
    //iterate over the factors we got from the HTML
    for (var factor in factorObj) {
      //check to see if this num is a multiple of factor
      if (num % factor == 0) {
        //if yes, then ass the text to output string
        outputStr += factorObj[factor];
      }
    }
    //now if we have words in outputStr, format it like this " - FixxBuzz!"
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max: ", max);
  if (! max){
    reportError("You Must Provide a Maximum");
  }
})
