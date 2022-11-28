import React , { Component } from "react"
import Carousel from 'react-bootstrap/Carousel';
import "./style/rentcar.css"


export default class AboutUs extends Component {
render(){
    return(
      <div>
<div className="content">
  <h1><i>Pick the best cars for trips from GetCars...</i></h1>
  <p ><i>Choose a Car You're Comfortable with
   A little extra space in the car might sound appealing when you're on vacation, 
  but driving a SUV or van may be challenging if you're used to a compact car at home.
   If unfamiliar locations, narrow streets, and pedestrian traffic intimidate you, choose a rental car that's similar to the one you usually drive.</i></p>
</div>

<div className="about">
  

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tse1.mm.bing.net/th?id=OIP.BEhcBe5a2SXYV2wyibKGxgHaEw&pid=Api&P=0"
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tse4.mm.bing.net/th?id=OIP.YnaE-Lf4OZSBQPUvXBxkLAHaEK&pid=Api&P=0"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tse1.mm.bing.net/th?id=OIP.oUj_LG2ByYopAmDha_TxAQHaFj&pid=Api&P=0"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
</div>

</div>
      

)}}