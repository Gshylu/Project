import React, { Component } from "react";
import axios from 'axios';
import CarTableRow from "./TableRow"


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      carRental: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/carRental/')
      .then(res => {
        this.setState({
          carRental: res.data
         
        }); console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  Table() {
    return this.state.carRental.map((res, i) => {
      return <CarTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
     <h4><b>....Drive to find freedom...</b></h4>
    
     <table>{this.Table()}</table>
    </div>);
  }
}