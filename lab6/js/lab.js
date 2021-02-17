//Lab 6: Arrays and Objects
//Author: Victoria White
//Created: Feb. 15 2021
//License: Public Domain

var myTransport = ["Toyota Prius", "Walking", "Rides from friends", "Bike"];

myMainRide = {
  make: "Toyota",
  model: "Prius",
  year: 2008,
  color: "Gray",
  extras: "805 brewery sticker on the rear drivers side window",
};

document.writeln("Getting Around " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "<pre>");
