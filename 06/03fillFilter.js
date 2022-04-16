var newArray = [10,12,14,17,19,22];

newArray.fill("hi",2,3);//replace array item from hi in 2nd index number and end with 3rd index number 

//console.log(newArray);

var result =newArray.filter((num)=> num<20);

//console.log(result);

var users = ["barik","tarique","rasikh","sharique","wajid","wahid"];

console.log(users);

var newUsers = users.slice(1,3);

console.log(newUsers);

users.splice(1,0,"Barik","Quamar","Hi");

console.log(users);