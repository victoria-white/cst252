//Lab 10: JavaScript Events and Forms
//Author: Victoria White <vwhite@csumb.edu>
//Created: Mar. 7 2021
//License: Public Domain

var buttonEl = document.getElementById("my-button");
console.log("El Button", buttonEl);

buttonEl.addEventListener("click", function(){
  var name = promt("what is your name?");
  var titleEl = document.getElementById("user-name");
  console.log("Title element: ", titleEl);
  titleEl.innerText = "Hello, " + name;
})
