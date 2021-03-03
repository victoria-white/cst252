//Lab 9: Javascript for the Web
//Author: Victoria White <vwhite@csumb.edu>
//Created: Mar. 2 2021
//License: Public Domain

oldElement = document.getElementById("img");
newElement = document.createElement("div");
oldElement.appendChild(newElement);
newElement.id = "Cooper";
newElement.innerHTML = "a chunky cat.";
newElement.style.fontSize = "18pt";
newElement.style.fontFamily = 'Tahoma';
