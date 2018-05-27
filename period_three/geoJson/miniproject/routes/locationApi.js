var express = require('express');
var router = express.Router();
var login = require("../facades/loginFacade")
const gju = require('geojson-utils')

router.post('/login', async function(req, res, next) {

    const d = req.body;
    console.log(d)
  try{

        const friends = await login(d.username, d.password, d.longitude, d.latitude, d.distance)
        res.json(friends)

  }catch(e){


    res.status(403)
    
    res.json(e)
  }
});


module.exports = router;
