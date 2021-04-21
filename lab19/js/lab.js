//Lab 19: AJAX
//Author: Victoria White <vwhite@csumb.edu>
//Created: April 20th 2021
//License: Public Domain

URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

$("#action").click(function(){
  $.ajax({
    url: URL,
    type: "GET",
  })
  .done(function(data) {
    console.log(data);
    $("output").append("<p>The smartest man in the room says: <b>" + data.message);
  })
});
