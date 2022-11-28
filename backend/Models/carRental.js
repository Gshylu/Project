const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let carRentalSchema = new Schema({

ownerName: {
    type: String
},
carName :{
  type:String
},
driverName: {
    type: String
},
passengersCapacity: {
    type: Number
},
mileage : {
  type:Number
},
fueltype:{
    type: String
},
chargesPerHour:{
    type:Number
},
image :{
  type:String
}
},{
    collection: 'carRental'
})

module.exports = mongoose.model('CarRental', carRentalSchema)
