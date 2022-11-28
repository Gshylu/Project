import React, { Component } from 'react'
import "./style/rentcar.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
//import Button from 'react-bootstrap/Button'
import "./Font"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class CarTableRow extends Component {
 
 

  constructor(props) {
    super(props)
    this.deleteCarRental = this.deleteCarRental.bind(this)
  }

  deleteCarRental() {
    axios
      .delete(
        'http://localhost:4000/carRental/delete-carRental/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('your details successfully deleted!')
        alert("your details has been successfully deleted.")
      })
      .catch((error) => {
        console.log(error)
      })
  }
render(){
  return (
   
   <tr>
   <td>
   <div className="tb">
   <div>
      <img src={this.props.obj.image} className="img" alt='pic' height={250} width={300}/> 
   </div>
     <div className="cont">
      <h3>{this.props.obj.carName}</h3>
      <p>Passengers Capacity : {this.props.obj.passengersCapacity}<FontAwesomeIcon icon="user"/></p>
      <p><i><FontAwesomeIcon icon="gas-pump"/> {this.props.obj.fueltype}
       <span>(mileage:{this.props.obj.mileage})</span></i></p>
      <p><i><b>ChargesPerHour :<FontAwesomeIcon icon="indian-rupee-sign"/>{this.props.obj.chargesPerHour}</b></i>
      <Link to={'/Book'}><button className="btn2">Book</button></Link>{/*<span><Book/></span>*/}</p>
      
      
    { /* <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-carRental/' + this.props.obj._id}
          >
            Edit
          </Link>        
          <button onClick={this.deleteCarRental} className="btn2" >
            Delete
          </button>*/}
          </div>
          </div>
   </td> 
   </tr>
  )
}
}


    