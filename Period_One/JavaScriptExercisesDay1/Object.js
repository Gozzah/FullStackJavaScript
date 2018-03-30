/* 1) Create an object with four different properties, with values, of your own choice (ex: name, birthday, hobby, email).
Use a foreach loop to demonstrate that we can iterate over the properties in an object.
Use the delete keyword to demonstrate we can delete existing properties from an object (delete a property, and iterate over the properties again) 
Use the function (inherited from Object) hasOwnProperty() to test whether a property exist (directly) on your object (test with both and existing, and non-existing property). */

var person = {

    firstName: 'Rune',
    lastName : 'Jensen',
    work     : 'Student',
    email    : 'wontletyouknow@xxx.com'

};



function loopThroughObject(obj){
    
    for(var f in obj){

        if(obj.hasOwnProperty(f)){

            console.log(f + ' = ' +obj[f])
        }
    }

}

loopThroughObject(person);

delete person.email;

console.log('')
console.log('')
console.log('')

loopThroughObject(person)

console.log(person.hasOwnProperty('javascript'))  //false
console.log(person.hasOwnProperty('firstName'))   //true
console.log(person.hasOwnProperty('firstname'))   //false, er casesensitive


function listAllProperties(obj){

var objectToinspect;
var result=[];

for (objectToinspect = obj; objectToinspect !== null; objectToinspect = Object.getPrototypeOf(objectToinspect)){
                                                          
    result = result.concat(Object.getOwnPropertyNames(objectToinspect));
}

return result;
}

/* 2)
Create a Constructor function to create new Persons having:
a firstName, lastName and an age.
A method to get details about the Person */

function testPerson(firstName, lastName, age){
    
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.getInfo = function(){
    
            return this.firstName + ' ' + this.lastName + ' ' + this.age;
    
        }
    }

var rune = new testPerson('Rune', 'Jensen', 500)


console.log(rune.getInfo())

/* 3)
Create an object of your own choice and list all properties in the object using one of the function given here “Enumerate the properties of an object”:
Delete one of the properties in your object, and use the method above to verify that this is possible in JavaScript.
The need to enumerate all properties in an object is a very common problem, and something you should get familiar with. */


function listAllProperties(obj){
    
    var objectToinspect;
    var result=[];
    
    for (objectToinspect = obj; objectToinspect !== null; objectToinspect = Object.getPrototypeOf(objectToinspect)){
                                                              
        result = result.concat(Object.getOwnPropertyNames(objectToinspect));
    }
    
    return result;
    }

    console.log(rune.getInfo())

    delete rune.age

    console.log(rune.getInfo())