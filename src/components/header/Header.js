import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css"

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="p-3 display-flex justify-content-center background">
            <Navbar.Brand href="/" className='text-info' >
                Employee Directory 
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header; 

{/* <Navbar>
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar> */}

