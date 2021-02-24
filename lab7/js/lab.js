//Lab 7: Functions
//Author: Victoria White
//Created: Feb. 23 2021
//License: Public Domain

function myFunction() {
    var userName = window.prompt("Hi, Please enter your name so it can be sorted!");
    console.log("userName = ", userName);
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
