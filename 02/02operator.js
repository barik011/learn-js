var listPrice =599;
var sellPrice =490;
var discountPrice = ((listPrice-sellPrice)/listPrice)*100;

console.log("Without Round Figure: "+ discountPrice);

console.log("In Round Figure: "+ Math.round(discountPrice)+ "% off");


console.log(typeof listPrice);

var result = listPrice>sellPrice;

console.log(typeof result);

var num1 = 2;
var num2 = 3;
var num3 = 4;
var num4 = 5;

var outPut = num1*num2;
console.log( "num1*num2 :" + outPut);

var outPut = num1**num2;
console.log( "num1*num2 :" + outPut);

var outPut = num1*num2**num3;
console.log( "num1*num2 :" + outPut);