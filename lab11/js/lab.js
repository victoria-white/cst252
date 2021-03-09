//Lab 11: Conditionals
//Author: Victoria White <vwhite@csumb.edu>
//Created: Mar. 9 2021
//License: Public Domain

function sortingHat(name) {
  var len = name.length;
  console.log("length:", len);

  var mod = len % 4;
  console.log("mod:", mod);
  if (mod == 0){
    return("Gryfindor");
  } else if (mod == 1) {
    return("Ravenclaw");
  } else if (mod == 2) {
    return("Syletherin");
  } else {
    return("Hufflepuff");
  }
}

var name = prompt("name");
var house = sortingHat(name);
console.log(house);
