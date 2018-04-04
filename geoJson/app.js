const express = require('express')
const app = express()




const gameArea = require('./gameData').gameArea.geometry;
const players = require('./gameData').players
const gju = require('geojson-utils')
app.get('/', (req, res) => res.send('Geo Demo!'))
app.get("/geoapi/isuserinarea/:lon/:lat", (req,res)=>{

    const lon = req.params.lon;
    const lat = req.params.lat;
    const pos =({"type":"Point","coordinates":[lon,lat]});
    const found = gju.pointInPolygon(pos,gameArea);
    let returnobj = {status:found}
    const msg = found ? "Point was inside gameArea": "Point was outside gameArea"
    returnobj.msg = msg
    res.json({returnobj})

})
app.listen(3000, () => console.log('Example app listening on port 3000!'))



