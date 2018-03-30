/* I ES5 blev bind introduceret, det giver mulighed for at sætte værdien af en funktions this, ligemeget hvordan det bliver kaldt. 
=> har ingen this, dets this bliver bundet til den omkringliggende kontekst ( =>this, er this fra den kode => er brugt indenfor.

Udenfor en funktion refererer this altid til det globale object(Window) */

// I webbrowsere er window objektet også det globale objekt

console.log(this === window); // true

a = 37;
console.log(window.a); // 37


this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"


/* Indeni en funktion er værdien af this afhængig af i hvilken kontekst funktionen bliver kaldt.
I nedstående eksempel er this ikke sat via funktionens kald og derfor vil this per default være = det globale objekt (window) */

function f1() {
    return this;
  }
  
  // In a browser:
  f1() === window; // true 
  
  // In Node:
  f1() === global; // true
  

//Benytter vi os derimod af strict mode vil værdien af this forblive det this var sat til da funktionen blev kaldt.
// I nedstående eksempel er f2's this undefined da metoden ikke bliver kaldt som en metode af et objekt (feks window.f2())

function f2() {
    'use strict'; // see strict mode
    return this;
  }
  
  f2() === undefined; // true

/* Hvis man vil videregive værdien af this fra en kontekst til en anden, gøres dette vha call() eller apply
I nedstående eksempel vises hvordan værdien af this skifter alt efter hvilket objekt der kalder metoden, knytter 
vi ikke et objekt til metoden, vil this automatisk knytte sig til det globale objekt(window) */


// Et objekt kan blive sat som det første argument til call() eller apply() og this vil blive bundet til det
var obj = {a: 'Custom'};


var a = 'Global';

function whatsThis(arg) {
  return this.a;  // Værdien af this afhænger af hvordan funktionen bliver kaldt, se nedstående eksempler
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

/* Når en funktion bruger this i sin body, kan værdien af this bindes til et specifikt objekt ved at bruge bind() eller apply()
Disse to metoder har alle funktioner og de arver dem fra Function.prototype */

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};


//Det første parameter er det objekt der skal bruges som 'this', de efterfølgende parametere er passed som argumenter når vi kalder funktionen
add.call(o, 5, 7); // 16

//Det første parameter er det objekt der skal bruges som 'this', det andet er et array hvis værdier bruges som parametere når funktionen kaldes
add.apply(o, [10, 20]); // 34

// call kræver at parametere er listet specifikt
// apply lader os kalde funktionen med argumenter
//Huskeregel : a for array, c for comma

/* Når vi bruger call eller apply, sker der det at hvis valuen der bliver passed ikke er et objekt, vil JS automatisk prøve
at omdanne det til et objekt via JSs interne ToObject metode.
Bruges der primitive værdier som 7 eller 'akmdamkw', vil Js prøve at lave dem til et objekt. Se nedstående eksempel. */

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]


/* Bind metoden blev introduceret i ECMAScript5.
Kaldes. f.bind(EtRandomObjekt) bliver der lavet en helt ny funktion med samme body og scope som den originale funktion f, 
men i den nye funktion er this permanent bundet til det første argument bind modtager, ligemeget hvordan funktionen bruges.
Bind kan kun bindes en gang
Se nedstående eksempel.  */

function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind kan kun bindes en gang!!!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty
