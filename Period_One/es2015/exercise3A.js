//Exercise A

function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    }.bind(this));// We are binding this to the function, if we don't , 'this' will refer to the global window and return undefined
  }

  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log(numbers.fives); 


function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(v => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    }   /* Arrow functions can't bind their own this, instead they bind their 'this' to the function they are inside (Called 'Lexical this).
    "Arrow functions don't have a this reference so they use the reference of the enclosing context,"; */
    )}

var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives); 




