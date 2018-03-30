const fetch = require('node-fetch')
const URL = "https://swapi.co/api/people/"

async function getPlanetForFirstSpeciesInFirstMovieForPersonID(id){
    const result = await fetch(URL);
    /* If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value
    We are using the promise we get back to enter the Json-array, then we enter results and has access to all variables */
    const persondata = await result.json().then((nameData)=>nameData.results[id]);
   /*  Grabbing the promise we get back from persondata(Lukes information since he is at position 0 in the name array)
    Then we fetch the film he has at position 0 in his film array */
    const film = await fetch(persondata.films[id])
    //When we have the specific film, we request it as json and grab the movie titel and the first URL in the species array
    const filmdata = await film.json().then((moviedata)=>[moviedata.title, moviedata.species[0]])
    //Then we fetch filmdata and asks for position 1 in the array ( The species information)
    const species = await fetch(filmdata[1])
    //Once again we request to get the result as json and we search for the name of the species and what world it lives in
    const speciesdata = await species.json().then((speciesdata)=>[speciesdata.name, speciesdata.homeworld])
    //And finally we fetch the homeworld data ( at position 1, we find the url with the homeworld information)
    const homeworld = await fetch(speciesdata[1])
    //We request the data from speciesdata as json and we search for the name
    const homeworlddata = await homeworld.json().then((homeworlddata)=>homeworlddata.name)
    
    console.log(persondata.name)
    console.log(filmdata[0])
    console.log(speciesdata[0])
    console.log(homeworlddata)
}



getPlanetForFirstSpeciesInFirstMovieForPersonID(0).catch((e)=>{

    console.log('There was an error :', e)
    
    });