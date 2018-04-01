//Exercise 5

/* The rest parameters can be mentioned in a function definition with three dots ...
They literally mean “gather the remaining parameters into an array” */

function f(x, y, a, b, c, d, e, f) {
    return `
    Sum: ${x+y} 
    Rest Value 1 is a ${a.constructor.name} 
    Rest Value 2 is a ${b.constructor.name} 
    Rest Value 3 is a ${c.constructor.name} 
    Rest Value 4 is a ${d.constructor.name} 
    Rest Value 5 is a ${e.constructor.name} 
    Rest Value 6 is a ${f.constructor.name} 
    `;
}

//console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}))

/* Output: 
Sum: 7
Rest Value 1 is a Boolean
Rest Value 2 is a Number
Rest Value 3 is a String
Rest Value 4 is a Array
Rest Value 5 is a Date
Rest Value 6 is a Object */


/* var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams)); */

/* Output: 
Sum: 7
Rest Value 1 is a Boolean
Rest Value 2 is a Number
Rest Value 3 is a String
Rest Value 4 is a Array
Rest Value 5 is a Date
Rest Value 6 is a Object */

/* var chars = [... f(5,2,...restParams)];
console.log(chars) */

//Prints all the constructornames as chars

module.exports = {
    f}