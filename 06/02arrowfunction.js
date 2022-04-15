// function isEven(element){
//     if(element%2===0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(2));

var isEven = (element) =>{
    return element%2===0;
}

// console.log(isEven(3));

// var result=[2,3,8,10].every(isEven);

// console.log("Old Code: ",result);

// var result=[2,4,8,10].every((e)=>{
//     return e%2===0;
// });

// console.log("Moderate Code: ",result);

var result=[2,4,8,10].every((e)=> (e%2===0));

console.log("Modern Code: ",result);