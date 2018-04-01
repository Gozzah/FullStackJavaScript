//Exercise B

var counter = {
    count: 0,
    inc: function () {
      this.count++;
      console.log(this === counter)
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
counter.inc();
console.log(counter.count); //Now two
counter.inc();
console.log(counter.count); //Now three

var counter = {
    count: 0,
    inc: () => {
      this.count++;
      console.log(this === counter)
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //prints zero again
counter.inc();
console.log(counter.count); //prints zero again

/* It makes it worse since our arrowfunctions 'this' never gets bound to the counter object, since arrowfunctions
 'this' inside objects, refers to the 'this' outside of the object (global in this case).
  Hence counter will always be zero when we call it. */