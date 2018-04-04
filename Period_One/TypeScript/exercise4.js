// We are telling typescript that this IS a myFunc type. So we are effectively overwriting typescripts checking behaviour.
//thereby forcing typescript to treat testInterface as an instance of the myFunc interface
//Finally we create a function and tell it to obey the myFunc interface
var implementInterfaceToFunction = function (firstargument, secondargument, thirdArgument) {
    var array = [];
    array.push(firstargument);
    array.push(secondargument);
    array.push(thirdArgument);
    return array.map(function (x) { return x.toUpperCase(); });
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
    //If we insert anything than a string it says its not assignable to anything but a String
};
f2(implementInterfaceToFunction);
// output [ 'A', 'B', 'C' ]
console.log(implementInterfaceToFunction('a', 'g', 'f'));
//output [ 'A', 'G', 'F' ]
