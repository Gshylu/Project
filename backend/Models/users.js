const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({

userName: {
    type: String
},
gmail :{
  type:String
},
password: {
    type: Number
},
phoneNumber: {
    type: Number
},
address: {
   "HouseNumber" : {
    "type":Number
   },
   "RoadNumber" : {
    "type":Number
   },
   "city":{
    "type":"String"
   }
}
},{
    collection: 'users'
})

module.exports = mongoose.model('User', usersSchema)
