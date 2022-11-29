import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React,{Component} from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./pages/style/app.css"

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import NavDropdown from 'react-bootstrap/NavDropdown';




import Home from "./pages/Home";
import Create from "./pages/Create";
import AboutUs from "./pages/about";
import Book from "./pages/book";
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./pages/style/rentcar.css"


export default class App extends Component {
  return (
    <Router>
    <header className="App-header">
          <Navbar style={{backgroundColor:"#00008b"}}>
          
            <Container>
              <Navbar.Brand  style={{color:"white",fontStyle:"italic"}}>
                     <h2>GetCars...</h2>     
              </Navbar.Brand>
              <Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          </Nav>
             
            <Nav className="justify-content-end">
               <Nav>
                  <Link to={'/'} className="nav-link" style={{color:"white",fontStyle:"italic"}}>
                   Home
                  </Link>
              </Nav>
              <Nav>
                  <Link to={'/Register'} className="nav-link" style={{color:"white",fontStyle:"italic"}}>
                   Register
                  </Link>
              </Nav>
              <Nav>
                  <Link to={'/AboutUs'} className="nav-link" style={{color:"white",fontStyle:"italic"}}>
                   About Us
                  </Link>
              </Nav>
             
             <Nav >
              <NavDropdown title={<span className="text-light my-auto">Profile</span>}  id="navbarScrollingDropdown" >
              <NavDropdown.Item href={'/Book'} className="nav-link">YourBookings</NavDropdown.Item>
              <NavDropdown.Item href={'/Create'} className="nav-link">RentYourCar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={'/Login'} className="nav-link">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
            </Nav>
            </Container>
          </Navbar>
        </header>
    <div className="App">
  
   

  <Routes>
  
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/Create" element={<Create/>}></Route>
  <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
  <Route exact path="/Book" element={<Book/>}></Route>
  <Route exact path="/Login" element={<Login/>}></Route>
  <Route exact path="/Register" element={<Register/>}></Route>


  
  </Routes>
           
    </div>
  </Router>

  );
}



