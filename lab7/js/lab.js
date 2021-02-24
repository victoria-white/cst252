//Lab 7: Functions
//Author: Victoria White
//Created: Feb. 23 2021
//License: Public Domain

function myFunction() {
    var userName = window.prompt("hi, what is your name?");
    console.log("username = ", username);
    //split string into array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    //sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    //convert array back into string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
    return nameSorted;
}
document.writeln("Here is your sorted name: ",
                 myFunction(), "<br>")
