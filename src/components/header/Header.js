import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css"

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="p-3 display-flex justify-content-center Title">
            <Navbar.Brand href="/" className='text-info' >
                Employee Directory 
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header; 


