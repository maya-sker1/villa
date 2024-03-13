
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { useState } from 'react';
import { FaCalendar } from "react-icons/fa";


function BasicNav() {
  const [navbar,setNavbar] = useState(false);
  const change = () =>{
    if(window.scrollY >=70){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  };
  window.addEventListener('scroll',change)
  
  return (
    <Navbar expand="lg" className={navbar ? 'navbar change-top' :'navbar'}>

      <Container fluid>
        <Navbar.Brand href="#" className="title" >VILLA</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className='navbar-collapse'>
          <Nav
            className="me-auto my-2 my-lg-0 list "
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href='/'> Home</Nav.Link>
            <Nav.Link  href='/properties'>Properties</Nav.Link>
            <Nav.Link  href='/datails'>Property Datails</Nav.Link>
            <Nav.Link  href='/contact'>Contact Us </Nav.Link>
          </Nav>

          <Form className="wrapper">
            <Button className='oval'>Schedule a visit</Button><button className='circl'><FaCalendar /></button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;