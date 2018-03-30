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

var uppercased = names.map(namesUpperCased)

console.log(uppercased)

function myFilter(arr, callback){
    
        return callback(arr)
    
    }
    
    console.log(myFilter(names,filteredNames))
    
    
    
    function myMap(arr, callback){
        
        console.log(arr.map(callback))
     
        }

function myFilterArray(array, callback) {
    return callback(array);
}

function FilterArraay(arr) {
    var result = []
    arr.forEach(element => {
        if (element.length <= 3) {
            result.push(element);
        }
    });
    return result;
}

console.log(myFilterArray(names,filterArray));


function myMapArray(array, callback) {
    return callback(array);
}

function mapArray(arr) {
    var result = [];
    arr.forEach(el => {
        result.push(el.toLocaleUpperCase());
    });
    return result;
}
console.log(myMapArray(names, mapArray));
        
    var uppperCased2 = myMap(names,namesUpperCased)
