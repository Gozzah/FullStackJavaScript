var names = ["Lars","Jan","Peter","Bo","Frederik","Rune"];

Array.prototype.myFilter = function (callback) {
    var sortedArray = [];
    this.forEach(val => {
        if (callback(val) !== false) {
            sortedArray.push(val);
        }
    });
    return sortedArray;
}

Array.prototype.myMap = function (callback) {
    var sortedArray = [];
    this.forEach(val => {
        sortedArray.push(callback(val));
    });
    return sortedArray;
}

console.log(names.myFilter(name => name.length <= 3));
console.log(names.myMap(name => name.toLocaleUpperCase()));