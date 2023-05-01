import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" style={{zIndex:'3'}}>
            <Container >
                <Navbar.Brand href="#">
                    <img className='me-0 me-md-5' style={{width:'120px'}} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-0 ms-md-5 me-4 w-100">
                        <Form.Control
                            type="search"
                            placeholder="Search your Destination...."
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none me-5'>News</Link>
                        <Link className='text-decoration-none me-5'>Destination</Link>
                        <Link className='text-decoration-none me-5'>Blog</Link>
                        <Link className='text-decoration-none me-5'>Contact</Link>
                    </Nav>
                    <Button>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;