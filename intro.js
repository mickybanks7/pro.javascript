// JavaScript Document
var name = "Emeka";
var age = 99;
var age_ten_yrs_ago;
var final; 
var my_likes = ["football", "basketball", "swimming"]
var library = {author: "JK.rowlings", book_title: "Harry potter and the Prisoner of Azkaban", intresting: true}

age_ten_yrs_ago = age - 10;
final = "my age ten years ago was " + age_ten_yrs_ago + " and I like " + my_likes[2] + ".my favourite book is " + library.book_title

document.getElementById("emeka").innerHTML = "That is how we roll";

//this is a single line comment

/*
this is a 
multiple line 
comment 
*/
console.log(name);
console.log(age);
console.log(final);