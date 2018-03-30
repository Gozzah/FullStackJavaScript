/* 1) 
Implement and test the Closure Counter Example from the Slides

En closure er et specielt objekt der kombinerer en funktion og det miljø funktionen var created in
 */

 
function init() {
    var name = "Mozilla"; // Local variable
    function displayName() { // Inner function --> a closure
      alert (name); // Uses variable from the parent function
    }
    displayName();
  }
  //init();

 // The environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created

  function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      alert(name);
      console.log(name)
    }
    return displayName;
  }
  var myFunc = makeFunc();
  myFunc();

/*   myfunc gør det samme som init, 
  grunden til dette er muligt er at den er blevet en closure. (Normalt ville vi ikke kunne acces name
    , da lokale variabler kun eksisterer så længe funktionen bliver excuted) */