var country = ["India", "Russia","Nepal","Srilanka","Bangladesh"];

var state = new Array("Bihar","Delhi","UP","Jharkhand");

//console.log(country[0]);

//console.log(country.length);

country[2]="Bhootan";

//console.log(country[2]);

var user= ["Barique","barik011@gmail.com",37,true];

console.log(user);
user.pop();//Delete last element of Array
console.log(user);

user.unshift("Unique Id");//Add New element at first position (in 0 index)of Array
console.log(user);

user.shift();//Delete first position (in 0 index)of Array

console.log(user);

console.log(user.indexOf("barik011@gmail.com"));//Show your array item index

console.log(Array.from("Barique"));

console.log(user);

