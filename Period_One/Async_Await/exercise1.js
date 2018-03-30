const fetch = require('node-fetch')
const URL = "https://swapi.co/api/people/";


var now = require('performance-now');
var start = now();
var end = now();
console.log((start.toFixed(3)))
console.log((start-end).toFixed(3))

async function fetchPerson(url,id){

    const result = await fetch(URL);
    //We are using the promise we get back to enter the Json-array, then we enter results and has access to all variables(We call the in printnames)
    const data = await result.json().then((nameData)=>nameData.results[id-1])
    return data;
}


  
async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL,1);
  const person2 = await fetchPerson(URL,2);
  // Calling all functions in parallel
  let finalResult =await Promise.all([person1.name, await person2.name])
  console.log(finalResult)
  console.log("After all"); 
  // The difference between the two functions, is only a few miliseconds. But imagine if we had 10.000 Http requests.. It's a big difference suddenly.
  //time ranges from 136-138
}

printNames().catch((e)=>{

  console.log('There was an error :', e)
  
  });

async function printNames2() {
  console.log("Before");
  //With this approach person2, has to wait for person1 to finish
  const person1 = await fetchPerson(URL,1);
  const person2 = await fetchPerson(URL,2);
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all"); 
  
}


printNames2().catch((e)=>{

  console.log('There was an error :', e)
  
  //Time ranges from 138-152
  });


