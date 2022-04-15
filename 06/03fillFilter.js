var newArray = [10,12,14,17,19,22];

newArray.fill("hi",2,3);//replace array item from hi in 2nd index number and end with 3rd index number 

console.log(newArray);

var result =newArray.filter((num)=> num<20);

console.log(result);