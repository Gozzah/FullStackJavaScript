import mongoose from 'mongoose'


//Mongo Connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Friends',{




});


const friendSchema = new mongoose.Schema({


firstName: {

    type: String


},

lastName: {

    type: String

},

gender: {

    type: String

},

age: {

    type: Number

},

language: {

    type: String

},
email: {

    type: String

},
gender: {

    type: Array

},
contacts: {

    type: Array

}

});


const Friends = mongoose.model('friends', friendSchema)
export {Friends};