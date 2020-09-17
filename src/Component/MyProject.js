import React from 'react';

import { Navbar, Nav,  FormControl, Button, Image } from 'react-bootstrap';
import {logo} from '../assets/IconAsset'

// const { TabPane } = Tabs;
function MyProject() {
    return (
        <>
            <Navbar variant="dark" 
                style={{backgroundColor: "#1f365c"}} 
            >
                <Navbar.Brand href="#home"><Image src={logo} /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>   
            
        </>
    )
}

export default MyProject
