//Lab 17: Advanced jQuery
//Author: Victoria White <vwhite@csumb.edu>
//Created: April 6th 2021
//License: Public Domain

//Code from Wes Modes during class

//Add event listener to button (1)
$("#thing1-button").click(function(){
  $("#thing2-button").toggleClass("Name1");
})

//Add event listener to button (2)
$("#thing1-button").click(function(){
  $("#thing2-button").toggleClass("Name2");
})

$("#submit").click(function(){
  var = fullname = $("#fullname").val();
  $("replace").html(fullname + "'s");
  $("#thing1-button").html(fullname + " 1");
  $("#thing2-button").html(fullname + " 2");
})
