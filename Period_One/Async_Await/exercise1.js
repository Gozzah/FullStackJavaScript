const fetch = require('node-fetch')
const URL = "https://swapi.co/api/people/";

async function fetchPerson(url){
  
    const result = await fetch(url);
    const data = await result.json().then((data)=>data);
    return data ;
}

async function printNames() {
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2);
  let finalResult =await Promise.all([person1.name, await person2.name]);
  console.log(finalResult);
}

printNames().catch((e)=>{

  console.log('There was an error :', e)
  
  });
