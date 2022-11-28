
import React, { Component } from 'react';
import { FormErrors } from './LoginErrors';
import axios from "axios"
import {Link} from "react-router-dom"
import "./style/rentcar.css"


class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onSubmit = (event) =>{
    event.preventDefault();

   const usersObject = {
    email: this.state.email,
    password:this.state.password,
  };
  axios.get('http://localhost:5000/users//', usersObject)
  .then(res => console.log(res.data));

  this.setState({email:" ",password:" " })
  this.props.history.push('/')
}

  render () {
    return (
      <div className ="div2">
      <form onSubmit={this.onSubmit} className="form2">
         <h1 className="heading">Login Form</h1>
        <div >
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label >Email address</label>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleUserInput} required  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label>Password </label>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleUserInput}  />
        </div><br></br>
       <Link to="/"> <button type="submit" className="btn1" disabled={!this.state.formValid}>Login in</button></Link>
      </form>
      </div>
    )
  }
}

export default Login;
