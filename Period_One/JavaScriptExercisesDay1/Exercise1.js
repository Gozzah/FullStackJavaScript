//1

var names = ["Lars","Jan","Peter","Bo","Frederik","Rune"];

function filteredNames (arr){

    return arr.filter(function(val){

    return val.length <=3;
})
}

console.log(filteredNames(names))



function namesUpperCased(arr){

    return arr.toUpperCase();
}
z
var uppercased = names.map(namesUpperCased)

console.log(uppercased)








 

