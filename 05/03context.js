//Global Context
//Excution Context

// var name = "barique";
console.log(`${name}`);
var name = "barique";

function sayName(){
    var name ="M B";

    console.log(name);
}

sayName();

function electricBill(amount){

    var bill = parseInt(amount)+5;

    console.log(bill);

}
// electricBill("5");
electricBill(5);


// electricBillNew(10);
var electricBillNew = function (amount){
    var bill = parseInt(amount)+50;

    console.log(bill);
}

electricBillNew(10);