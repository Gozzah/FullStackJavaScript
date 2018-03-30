var url = 'https://swapi.co/api/people/';
const fetch = require('node-fetch');

function getPlanetForFirstSpeciesInFirstMovieForPersonID(id){

    let result = {};

    //Fething url and id
    fetch(url + id)
    //We tell the fetch that we want the results from the url back as Json
    .then(res => res.json())
    .then(data => {
/*      We create a let called nextInformation, inside it we store what data we want to fetch next time, 
        so we can return it and grab it in the next promise we return
 */    let nextInformation = data.films[0]
    //console.log(nextInformation)
    //We then create a variable personname, inside our result-object, and set it equal to the name we found in the data.
    result.personName = data.name;
    //console.log(result.personName)
    //We return a new promise, so we can continue our chaining, and the whole process starts all over
        return fetch(nextInformation).then(result => result.json())
        })
        .then(data => {

        let nextInformation = data.species[0];
        result.title = data.title;
        
            return fetch(nextInformation).then(result=> result.json())
            .then(data=>{

            let nextInformation = data.homeworld;
            result.speciesName = data.name;
            
                return fetch(nextInformation).then(result=> result.json())
                .then(data=>{

                result.homeworld = data.name;
                console.log(result)


                })
                })

                })
                .catch(error => console.log('Error :', error))

            }

    getPlanetForFirstSpeciesInFirstMovieForPersonID(1)