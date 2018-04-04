const express = require('express')
const app = express()




const gameArea = require('./gameData').gameArea.geometry;
const players = require('./gameData').players
const gju = require('geojson-utils')


app.get('/', (req, res) => res.send('Geo Demo!'))
app.get("/geoapi/isuserinarea/:lon/:lat", (req, res, ) => {

    const lon = req.params.lon;
    const lat = req.params.lat;
    const pos = ({ "type": "Point", "coordinates": [lon, lat] });
    const found = gju.pointInPolygon(pos, gameArea);
    let returnobj = { status: found }
    const msg = found ? "Point was inside gameArea" : "Point was outside gameArea"
    returnobj.msg = msg
    res.json({ returnobj })


})
app.get("/geoapi/findNearbyPlayers/:lon/:lat/:rad", (req, res) => {


    const center = ({ "type": "Point", "coordinates": [req.params.lon, req.params.lat] })
    var radius = req.params.rad;
    results = []

    for (var i in players) {

        if (gju.geometryWithinRadius(players[i].geometry, center, radius)) {

            results.push(players[i].properties)
        }
    }

    res.json(results)

});

app.get("/geoapi/distanceToUser/:lon/:lat/:username", (req, res) => {

    let center = { "type": "Point", "coordinates": [req.params.lon, req.params.lat] }
    let username = req.params.username;
    let currentPlayer;

    for (var i in players) {

        if (players[i].properties.name = username) {

            currentPlayer = players[i]
        }
    }
    let distance = gju.pointDistance(center, currentPlayer.geometry);


    res.json(distance)



    /*     players.forEach(player => {
    
            if(player.properties.name = username){
    
                currentPlayer = player;
            }
        });
        var distance = gju.pointDistance(center , currentPlayer.geometry);
    
        res.json(distance) */


})







app.listen(3000, () => console.log('Example app listening on port 3000!'))



