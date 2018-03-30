/* Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
setAge
setName
getInfo (should return a string like Peter, 45)
 */


/*  Funktionen kalder sig selv med det samme (Immediately-Invoked-Function-Expression)
 Det smarte ved dette er at, da der ikke findes privacy i JS, kan vi efterligne privacy ved at lave et nyt scope inden i funktionen.
 På denne måde kan vi returne det vi vil og samtidig holde resten af koden ude af det globale scope så vi ikke forurener dette */


/* Det smarte ved at namespace funktionen er at navnet er globalt,
 så vi kan access funktionen fra alle steder og også bruge den i andre moduler skulle vi få brug for dette */
var CreatePerson =(function (){

        function  myPerson (name, age){
            this.name = name;
            this.age = age;
            };
        CreatePerson.prototype.setName = function(newName){
                this.name = newName;

            /*     Kunne også skrives i dette eksempel og de næste som
                this.setName= function(newName){
                    this.name = newName; 
                  ########################
                    Men så vil console.log() udskrive:
                    setName: [Function],
                    setAge: [Function],
                    getInfo: [Function],
                    age: 33,
                    name: 'Rune' } */
        };
        CreatePerson.prototype.setAge = function(newAge){
            this.age =newAge;
        };
        CreatePerson.prototype.getInfo = function(){

            return this.name + ', ' + this.age;

        }

    }
);

var rune = new CreatePerson('Rune', 35);
console.log(rune.getInfo()) // Udskriver undefined, undefined for some reasom??  //Spørg Lars
rune.setAge(33)
rune.setName('Rune') 
console.log(rune); 
/* Udskriver CreatePerson {
    CreatePerson { age: 33, name: 'Rune' }


    console.log(rune.getInfo())
    //Udskriver Rune, 33
        */