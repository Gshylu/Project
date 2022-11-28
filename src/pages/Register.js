import React , { Component } from "react"
import axios from 'axios';
import "./style/rentcar.css"
import {Link} from  "react-router-dom"


export default class Register extends Component {
  
    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeUsersUserName= this.onChangeUsersUserName.bind(this);
      this.onChangeUsersGmail = this.onChangeUsersGmail.bind(this);
      this.onChangeUsersPassword = this.onChangeUsersPassword.bind(this);
      this.onChangeUsersPhoneNumber = this.onChangeUsersPhoneNumber.bind(this);
      this.onChangeUsersAddress = this.onChangeUsersAddress.bind(this);
      
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        
        
        userName:"",                  
        gmail: "",                     
        password: "",                
        phoneNumber: "",                     
        address:"",         

      }
    }
   
  
    onChangeUsersUserName(e) {
      this.setState({ userName: e.target.value })
    }
  
    onChangeUsersGmail(e) {
      this.setState({gmail: e.target.value })
    } 

    onChangeUsersPassword(e) {
      this.setState({ password: e.target.value })
    } 

    onChangeUsersPhoneNumber(e) {
      this.setState({ phoneNumber: e.target.value })
    } 
    onChangeUsersAddress(e) {
      this.setState({ address: e.target.value })
    }

    onSubmit = (event) =>{
        event.preventDefault();

       const usersObject = {

        userName:this.state.userName,
        gmail: this.state.gmail,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address:this.state.address,
        
      };
      axios.post('http://localhost:3000/users/create-users', usersObject)
        .then(res => console.log(res.data));
        alert("your user details has been submitted")

      this.setState({ userName: '', gmail: '', password: '', phoneNumber:'',
      address:'',})
     
    }
    render(){
    return(
  
      <div className ="div1">
      <form onSubmit={this.onSubmit} className="form1">
      <h1 className="heading">Register Form</h1><br/>
          <input type="text"  placeholder='enter your userName' onChange={this.onChangeUsersUserName} value={this.state.userName} name="Uname"></input><br></br><br></br>
          <input type="text"  placeholder='enter your gmail' onChange={ this.onChangeUsersGmail} value={this.state.gmail} name="Gmail"></input><br></br><br></br>
          <input type="number"  placeholder='enter password' onChange={this.onChangeUsersPassword} value={this.state.password} name="Password"></input><br></br><br></br>
          <input type="number" placeholder='enter your phoneNumber' onChange={this.onChangeUsersPhoneNumber} value={this.state.phoneNumber} name="Pnumber"></input><br></br><br></br>
          <textarea type="address" placeholder='type your address' className="address" onChange={this.onChangeUsersAddress} value={this.state.address} name="Address"></textarea><br></br><br></br>
         
         <Link to={'/Login'}><button type="submit" className="btn1" style={{color:"white" , fontStyle:"italic"}}>Submit</button></Link> 
          
        </form>
      </div>
    
 )}

    }