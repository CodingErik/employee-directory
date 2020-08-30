import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css"

// header component
function Header() {
    return (
        <Navbar className="p-3 display-flex justify-content-center Title shadow mb-4 ">
            <Navbar.Brand href="/" className='text-white' >
                <h1>Employee Directory </h1>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header; 


