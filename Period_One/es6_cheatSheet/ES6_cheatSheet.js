/* //#########################################
var foo = {

    var: 1,
    baz: 2
}
// Allows me use the name bar, to acces foo.bar other places in my program
var { bar } = foo;
//##############################################################

var tenses = ['me', 'you', 'he']


//  Destructuring array..............Sets firstPerson = me, secondPerson = you, thirdPerson = me
var [firstPerson, secondPerson, thirdPerson] = tenses;

//#######################################################

var foo = 2;

var obj = {

    bar: 1,
    // using the global foo variable, no need to type foo:2
    foo

}

//Another example

var name = "Rune";
var age = 35;

some.method({ name, age })
{
    name: name
    age: age
}

//#########################################################
// Destructuring functions

function calculateBMI({ height: h, weight: w, max = 25, callback }) {

    var bmi = w / math.pow(h, 2);
    if (bmi > max) {
        console.log('You are overweight')
    }
    if (callback) {
        callback(bmi)
    }
}

calculateBMI({ weight, height, callback: function () { } })

//###############################################
//ES6 Block scoping
/* 
Use constant for everything, unless you have to mutate the value then use let. 
Const and let are both block scoped.
Const can't be overwritten, but they can have their values changed
Example below

######################################

const NAMES = [];
NAMES.push("Jim");
console.log(NAMES.length === 1); // true
NAMES = ["Steve", "John"]; // error

If you want a constant to be completely immutable, use object.freeze to make the properties immutable.

#######################################################
Let can be overwritten

let number = 5;
number = 6;


Let is the new var

Using let
The new ES6 keyword let allows developers to scope variables at the block level (the nearest curly brackets).(Java scoping)

const is a signal that the variable won’t be reassigned.

let is a signal that the variable may be reassigned, such as a counter in a loop, 
or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in,
 which is not always the entire containing function. */

//######################################################################################

//Classes in ES6


/* class parent {

    age = 34;

    constructor() {

    }

    foo() {


    }

    bar() {


    }
}

var parent = new parent()    //Creates a new object
parent.age // prints 34


class child extends Parent {

    constructor() {
        super()
    }

    baz() {

    }

}

var child = new child();
//child is calling parents method.
child.bar();


An important difference between function declarations and class declarations is that function declarations are hoisted 
and class declarations are not. You first need to declare your class and then access it, 
otherwise code like the following will throw a ReferenceError:



class Rectangle {}

class Rectangle {}
var p = new Rectangle(); // this is gonna work!


A class expression is another way to define a class. Class expressions can be named or unnamed. 
The name given to a named class expression is local to the class's body. (it can be retrieved through the class's 
(not an instance's) .name property, though) */

// unnamed
/* var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
Note: Class expressions also suffer from the same hoisting issues mentioned for Class declarations.

#############################################################################################

                        Constructor and getter and setters
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the super keyword to call the constructor of the super class.



class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // setter Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100


##########################################################################################################

                                            Static keyword


The static keyword defines a static method for a class. Static methods are called without instantiating their class
 and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755


#########################################################################################################

Sub classing with extends
The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
If there is a constructor present in subclass, it needs to first call super() before using "this".


Super class calls with super
The super keyword is used to call corresponding methods of super class.

class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('Fuzzy');
l.speak();  */
// Fuzzy makes a noise.
// Fuzzy roars. */