import React , { Component } from "react"
import axios from 'axios';
import "./style/rentcar.css"


export default class Create extends Component {
   constructor(props) {
      super(props)

      // Setting up functions
      this.onChangeCarRentalOwnerName= this.onChangeCarRentalOwnerName.bind(this);
      this.onChangeCarRentalCarName = this.onChangeCarRentalCarName.bind(this);
      this.onChangeCarRentalPassengersCapacity = this.onChangeCarRentalPassengersCapacity.bind(this);
      this.onChangeCarRentalMileage = this.onChangeCarRentalMileage.bind(this);
      this.onChangeCarRentalFuelType = this.onChangeCarRentalFuelType.bind(this);
      this.onChangeCarRentalImage = this.onChangeCarRentalImage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        
        "ownerName": "",
        "carName": "",
        "passengersCapacity": "",
        "mileage": "",
        "fueltype": "",
        "image":"",
      }
    }
   
    onChangeCarRentalOwnerName(e) {
      this.setState({ ownerName: e.target.value })
    }
  
    onChangeCarRentalCarName(e) {
      this.setState({ carName: e.target.value })
    }
  
    onChangeCarRentalPassengersCapacity(e) {
      this.setState({ passengersCapacity: e.target.value })
    } 

    onChangeCarRentalMileage(e) {
      this.setState({ mileage: e.target.value })
    } 

    onChangeCarRentalFuelType(e) {
      this.setState({ fueltype: e.target.value })
    } 
    onChangeCarRentalImage(e) {
      this.setState({ image: e.target.value })
    }

    onSubmit = (event) =>{
        event.preventDefault();

       const carRentalObject = {
        ownerName:this.state.ownerName,
        carName: this.state.carName,
        passengersCapacity: this.state.passengersCapacity,
        mileage: this.state.mileage,
        fueltype:this.state.fueltype,
        image:this.state.image,
      };
      axios.post('http://localhost:4000/carRental/create-carRental', carRentalObject)
        .then(res => console.log(res.data));
        alert("your details has been submitted")
      this.setState({ ownerName: '',carName: '',passengersCapacity : '', mileage:'',
      fueltype:'',chargesPerHour:'', image:'',})
     
    }
    render(){
    return(
  
      <div className ="div3">
      <form onSubmit={this.onSubmit} className="form3">
      <h3>Rent Your Car</h3>

          <input type="text"  placeholder='enter your Name' onChange={this.onChangeCarRentalOwnerName} value={this.state.ownerName} name="Oname"></input><br></br><br></br>
          <input type="text"  placeholder='enter your carName' onChange={ this.onChangeCarRentalCarName} value={this.state.carName} name="Cname"></input><br></br><br></br>
          <input type="number"  placeholder='capacity of passengers' onChange={this.onChangeCarRentalPassengersCapacity} value={this.state.passengersCapacity} name="Passenger"></input><br></br><br></br>
          <input type="number" placeholder='mileage' onChange={this.onChangeCarRentalMileage} value={this.state.mileage} name="Mile"></input><br></br><br></br>
          <input type="text" placeholder='type of fuel' onChange={this.onChangeCarRentalFuelType} value={this.state.fueltype} name="Fuel"></input><br></br><br></br>
          <input type="url"  placeholder='enter the url of image of car' onChange={this.onChangeCarRentalImage} value={this.state.image} name="Image"></input><br></br><br></br>
          
          <button type="submit" className="btn1" style={{color:"white" , fontStyle:"italic"}}>Submit</button>
          
        </form>
      </div>
    
 )}

}