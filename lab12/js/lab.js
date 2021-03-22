//Lab 12: loops
//Author: Victoria White <vwhite@csumb.edu>
//Created: Mar. 10 2021
//License: Public Domain

//Javascript code courtesy of Wes Modes on iLearn
maxFactors = 4;

outputEl = document.getElementById("output");

function getFactorObj() {
  var factorObj = {};
  for (var factor = 0; factor<maxFactors; factor++) {
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    console.log(factor + "num: ", numValue, "text: ", textValue);
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}

function outputToPage(str) {
  newEL = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
    for (var num=0; num<maxNums; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
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
    console.log("max:", max);
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }

    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
