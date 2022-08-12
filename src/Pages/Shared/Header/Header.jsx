import { signOut } from '@firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Header.css";
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className="nav-menu">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h1 className="heading">FOODBAZ</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="ms-4">
                        <Nav className="me-auto fs-4">
                            <Nav.Link as={Link} to="/home" className="home-clr">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>
                        </Nav>
                        <Nav className="fs-4">
                            {
                                user ?
                                    <button onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Nav className="fs-4">
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className="fs-4">
                            <Nav.Link as={Link} to="/details">Details</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;