var name="Barique"

console.log(name);

function sayHi(){

    var name="Mohammad";
    
    console.log(name);

    function sayInnerFun(){
        var name="Mohammad Barique";
        console.log(name);
    }
    sayInnerFun();
}

sayHi();
