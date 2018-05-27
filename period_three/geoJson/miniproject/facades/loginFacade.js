var mongoose = require('mongoose');
var User = require('../models/user');
var Position = require("../models/position")
const gju = require('geojson-utils')


async function login(username, password, longitude, latitude, distance) {

    var user = await User.findOne({ userName: username }).exec();

    if (user == null || user.password != password) {
        
        throw { msg: 'Wrong username or password.', status: 403 }
        
    }
    
    const loc = {
        "type": "Point",
        "coordinates": [longitude, latitude]
    }
    

    const pos = await Position.findOneAndUpdate({ user: user._id },
        { user: user._id, created: Date.now(), loc: loc }, { upsert: true }).exec()
      
        //let friends = await findFriends(loc, distance * 1000).then((data)=>data.map((x)=>x.user));
        let friends = await findFriends(loc, distance * 1000).then((data)=>data);
         var userID = []
        friends.map((x)=>{


            userID.push(x)

        })
        //console.log(friends)
        console.log(userID)
      
    }


async function findFriends(point, dist) {

   return Position.find(
        {
            loc: {
                $near:
                    {
                        $geometry: point,
                        $maxDistance: dist
                    }
            }
        }


    )


 return null;
};

module.exports = login

