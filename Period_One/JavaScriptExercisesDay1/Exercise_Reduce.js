/* var all= ["Lars", "Peter", "Jan", "Bo"];

console.log(all.join(","))
console.log(all.join(" "))
console.log(all.join("#"))


var numbers = [2, 3, 67, 33]; 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer))

function reduceFunc(accumulator, currentValue){

return accumulator + currentValue;

}

console.log(numbers.reduce(reduceFunc)) */

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

   
   var reducerAvgAge = function(accumulator, member,index,arr ){

    if(index !== arr.length - 1){
        return accumulator + member ;

    }
    return (accumulator + member) / arr.length;
   } 

   

   console.log(members.map(member => member.age).reduce(reducerAvgAge));

//console.log(members.map( memberName=> memberName.name)) 