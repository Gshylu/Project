import React , { Component } from "react"
import axios from 'axios';
import "./style/rentcar.css"


export default class EditCarRental extends Component {
  
    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeCarRentalOwnerName= this.onChangeCarRentalOwnerName.bind(this);
      this.onChangeCarRentalCarName = this.onChangeCarRentalCarName.bind(this);
      this.onChangeCarRentalPassengersCapacity = this.onChangeCarRentalPassengersCapacity.bind(this);
      this.onChangeCarRentalMilage = this.onChangeCarRentalMilage.bind(this);
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
    componentDidMount() {
        axios.get('http://localhost:4000/carRental/edit-carRental/' + this.props.match.params.id)
          .then(res => {
            this.setState({
                ownerName:res.data.ownerName,
                carName: res.data.carName,
                passengersCapacity:res.data.passengersCapacity,
                mileage: res.data.mileage,
                fueltype: res.data.fueltype,
                image:res.data.image,
            });
          })
          .catch((error) => {
            console.log(error);
          })
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

    onChangeCarRentalMilage(e) {
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
      axios.put('http://localhost:4000/carRental/update-carRental',+ this.props.match.params.id, carRentalObject)
      .then((res) => {
        console.log(res.data)
        console.log('your details successfully updated')
        alert("your details successfully updated")
      }).catch((error) => {
        console.log(error)
      })
      
      this.props.history.push('/')
    }
    render(){
    return(
  
      <div className ="div1">
      <form onSubmit={this.onSubmit} >
          <input type="text"  placeholder='enter your Name' onChange={this.onChangeCarRentalOwnerName} value={this.state.ownerName} name="Oname"></input><br></br><br></br>
          <input type="text"  placeholder='enter your carName' onChange={ this.onChangeCarRentalCarName} value={this.state.carName} name="Cname"></input><br></br><br></br>
          <input type="number"  placeholder='capacity of passengers' onChange={this.onChangeCarRentalPassengersCapacity} value={this.state.passengersCapacity} name="Passenger"></input><br></br><br></br>
          <input type="number" placeholder='mileage' onChange={this.onChangeCarRentalMilage} value={this.state.mileage} name="Mile"></input><br></br><br></br>
          <input type="text" placeholder='type of fuel' onChange={this.onChangeCarRentalFuelType} value={this.state.fueltype} name="Fuel"></input><br></br><br></br>
          <input type="url"  placeholder='enter the url of image of car' onChange={this.onChangeCarRentalImage} value={this.state.image} name="Image"></input><br></br><br></br>
          <button type="submit" style={{color:"white" , fontStyle:"italic"}}>Update</button>

        </form>
      </div>
    
 )}

    }