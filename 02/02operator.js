var listPrice =599;
var sellPrice =490;
var discountPrice = ((listPrice-sellPrice)/listPrice)*100;

console.log("Without Round Figure: "+ discountPrice);

console.log("In Round Figure: "+ Math.round(discountPrice)+ "% off");


console.log(typeof listPrice);

var result = listPrice>sellPrice;

console.log(typeof result);
