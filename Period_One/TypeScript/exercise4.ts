interface myFunc{

    
// The () is a function property without a name
// Function parameters are firstargument, secondargument and thirdargument
(
firstargument : String,
secondArgument : String,
thirdArgument : String
):Array<String>
//Return type of the interface is set to an array
}

// We are telling typescript that this IS a myFunc type. So we are effectively overwriting typescripts checking behaviour.
//thereby forcing typescript to treat testInterface as an instance of the myFunc interface
//Finally we create a function and tell it to obey the myFunc interface
let implementInterfaceToFunction : myFunc = function(firstargument : String, secondargument:String ,thirdArgument:String){

    let array: Array<String> = [];
    array.push(firstargument);
    array.push(secondargument);
    array.push(thirdArgument);
    return array.map(x => x.toUpperCase());
    
}

let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
    //If we insert anything than a string it says its not assignable to anything but a String
}
f2(implementInterfaceToFunction)
// output [ 'A', 'B', 'C' ]

console.log(implementInterfaceToFunction('a','g','f'))
//output [ 'A', 'G', 'F' ]
