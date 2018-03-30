/* 
Hoisting er en mekanisme i JS, der gør at variabler og function declarations er flyttet til toppen af deres scope før noget code execution finder sted.
Dette betyder at ligegyldige hvor funktioner og variabler er declared, bliver de automatisk flyttet til toppen af deres scope,
ligemeget om deres scope er globalt eller lokalt. 
Det er kun declarations der bliver flyttet, assignment bliver hvor de er
I JS får en undeclared variabel automatisk tildelt værdien "Undefined" når den executes. ( Den er også af værdien undefined)
console.log(typeof variable); // Output: undefined
I JS bliver en ReferenceError smidt, når man prøver at tilgå en tidligere ikke erklæret variabel
console.log(variable); // Output: ReferenceError: variable is not defined
A variable is undeclared when it does not use the var keyword
Something is undefined when it hasn’t been defined yet. If you call a variable or function without having actually
created it yet the parser will give you an not defined error
*/




function hoistingDemo1(){
  
      a = 20;
      var b = 100;
  
     
  }
  
  hoistingDemo1();
  
  //console.log(a);
  // Vi kan godt få fat i a udenfor functionen, da vi kun har assignet vaulen 20, men ikke declared den. Da vi ikke har declared a, 
  //bliver a automatisk til en global variabel.
  // Så uden vi kan se det, står der "var a = 20" i toppen af scriptet.
  
  //console.log(b);
  // Kører vi programmet får vi af vide at der er en reference error, da b ikke er defined.
  //Grunden til dette er b er blevet declared, "b=100" og derfor er begrænset til hostingDemo funktionens scope.
  //Det er derfor umuligt at printe den uden for funktionen.
  // 
  
  
  console.log(hoist); // Output: undefined
  
  var hoist = 'Denne variabel er hoisted.'; 
  // Dette giver erroren undefined, da JS automatisk har hoistet variablen ( Vi bruger variablen før den er declared), 
  //så JS ser overstående som:
  
  var hoist;
  
  console.log(hoist);// Output er undefined
  
  var hoist = 'Denne variabel er hoisted.'; 
  
  /* Da JS giver mulighed for at bruge variabler før de er initialised, skal man være varsom, da JS i dette 
  tilfælde initialiser vores hoist med værdien " undefined"
  ################################################################################
  DESIGN RULE
  Declare og initialise derfor altid variabler før brug, så JS ved hvordan den skal håndtere dem og man undgår at ende 
  op med errors grundet overstående.
  ################################################################################ */
   
  
  function hoist() {
      console.log(message);
      var message='Hoisting is all the rage!'
    }
    
    hoist();
  
    //Som tidligere får vi værdien undefined da JS ser vores kode som:
  
    function hoist() {
      var message; // Var message er hoisted til toppen af hoist()s scope
      console.log(message);
      message='Hoisting is all the rage!'
    }
    
    hoist(); // Ouput: undefined
  
  
    //Dette er derfor den korrekte måde at skrive funktionen på
  
    function hoist() {
      var message='Hoisting is all the rage!'
      return (message);
    }
    
    hoist(); // Ouput: Hoisting is all the rage!
    // var message er declared og initialized før brug
  
  /*   Siden e5, har man kunne skrive i "Strict mode"
    I toppen af scriptet skriver man 'use strict'; eller "use strict";
    Dette gør at Js tvinger errors der ellers ikke ville være "silent", til at blive "not-silent" så vi kan se dem */
  
  /*
  ##############################################################################################################################
     let keyword
    Let er block scoped og ikke function scoped. 
    Dette betyder at variablen scope er bundet til den block den er declared i og ikke i den funktion den er declared i. */
  
    console.log(hoist); // Output: ReferenceError: hoist is not defined ...
    let hoist = 'The variable has been hoisted.';
  
  
  //Og som tidligere
  
  let hoist;
  
  console.log(hoist); // Output: undefined
  hoist = 'Hoisted';
  
  //Overstående vil give en undefined error 
  
  /* ##########################################################################################################################
  const keyword
  Ligesom med let, er const hoisted til toppen af sin block
  Er en variablen declared const, er den immutable, dvs den kan ikke ændres når den er assigned. */
  
  const PI = 3.142;
  
  PI = 22/7; // Lad os ændre værdien af P!
  
  console.log(PI); // Output: TypeError: Assignment to constant variable.
  
  // Og som med let får vi en reference error, istedet for at få en silent undefined.
  console.log(hoist); // Output: ReferenceError: hoist is not defined
  const hoist = 'The variable has been hoisted.';
  
  
  // Det samme gør sig gældende i funktioner
  
  function getCircumference(radius) {
      console.log(circumference)
      circumference = PI*radius*2;
      const PI = 22/7;
    }
    
    getCircumference(2) // ReferenceError: circumference is not defined
  
  /*   I ES6 får smider vores ide og lint endda denne besked
    PI was used before it was declared, which is illegal for const variables. 
    
    Og globalt.....*/
  
    const PI;
    console.log(PI); 
    PI=3.142;
  
    // får vi :SyntaxError: Missing initializer in const declaration
  
  /*   it's important to note that indeed, JavaScript hoists variables declared with es6 let and const. The difference in this case is 
      how it initialises them. 
      Variables declared with let and const remain uninitialised at the beginning of execution
      whilst variables declared with var are initialised with a value of undefined. 
    
      "While using es6 let and const, using undeclared variables will lead to a Reference Error because the variable 
      remains uninitialised at execution."*/
  
  
  /* 
    ######################################################################################################
    FUNCTION DECLARATIONS ER HOISTED
    Og det er derfor vi kan invoke dem, før de tilsyneladende er declared 
    Function Declarations must begin with “function
    A Function Declaration defines a named function variable without requiring variable assignment. 
    Function Declarations occur as standalone constructs and cannot be nested within non-function blocks. 
    It’s helpful to think of them as siblings of Variable Declarations.
    Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.*/
  
    hoisted(); // Output: "This function has been hoisted."
    
    function hoisted() {
      console.log('Weeeeeeeeeeee, jeg er blevet hoisted.');
    };
  
  /*   ######################################################################################################
    FUNCTION EXPRESSIONS  ER IKKE HOISTED
    A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ).
    Functions defined via Functions Expressions can be named or anonymous. 
    Function Expressions must not start with “function”
    Nedstående vil derfor ikke virke */
  
    expression(); //Output: "TypeError: expression is not a function
    
    var expression = function() {
      console.log('Det her vil aldrig virke, jeg er en expression, kun declarations er hoisted');
    };
  
    //Den smarte datamatiker vil selvfølgelig bare kombinerer de to ting for at slippe ud af kniben
  
    xpression(); // Ouput: TypeError: expression is not a function
    
    var expression = function hoisting() {
      console.log('Will this work?');
    };
  
  /*   Dette vil ikke virke da, "var expression" godt nok vil blive hoisted ( Da declared variabler hoistes, 
  men dens binding til en funktion vil ikke blive hoisted),
       Grunden til dette er at  vores IDE vil se expression som en variabel og ikke en funktion. 
       AKA don't be Troels*/
  
  /* ########################################################################################################################################
  Order of precedence
  Variable assignment har precendence over function declarations
  Function declarations har precedence over variable declarations
  Function declarations er hoisted over variable declarations, men ikke over variable assignments */
  
  //Variable assignment over function declaration
  
  var double = 22;  // Er både declared og assigned
  
  function double(num) {
    return (num*2);
  }
  
  console.log(typeof double); // Output: number
  
  
  //Function declarations over variable declarations
  
  var double;   // double er kun assigned, derfor har funktionen forret
  
  function double(num) {
    return (num*2);
  }
  
  console.log(typeof double); // Output: function
  
  // selv om vi byttede om på positionerne af double og function i de to tilfælde, ville vores JS IDE stadig hoiste dem som nævnt tidligere.
  
  
  /* ##################################################################################################################
  JS klasser
  JS KLASSER ER IKKE hoisted
  Dette betyder at vi i JS bliver nødt til at declare vores klasser før de kan bruges. */
  
  
  var Frodo = new Hobbit();
  Frodo.height = 100;
  Frodo.weight = 300;
  console.log(Frodo); // Output: ReferenceError: Hobbit is not defined
  
  class Hobbit {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  }
  
  /*  Vi får ikke undefined error, men derimod en Reference error. Hvilket er bevis på at klassen ikke er hoisted.
   In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.
   Any property that has not been assigned a value, assumes the undefined value. (ECMA 4.3.9 and 4.3.10).
   A function without a return statement,
    or a function with an empty return statement returns undefined. The value of an unsupplied function argument is undefined.
   
   In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable 
   A ReferenceError indicates that an invalid reference value has been detected */