//Lab 14: JavaScript Classes and Objects
//Author: Victoria White <vwhite@csumb.edu>
//Created: Mar. 23 2021
//License: Public Domain

function DreamCar(make, model, year, color) {
  this.carMake = make;
  this.carModel = model;
  this.carYear = year;
  this.carColor= color;
}

DreamCar.prototype.name = function() {
  return this.carMake + " " + this.carModel
};

var myDreamCar = new DreamCar("Toyota", "Tacoma", 2010, "Green");
document.getElementById("demo").innerHTML = "My Dream Car is a " myDreamCar.year() + myDreamCar.name();
