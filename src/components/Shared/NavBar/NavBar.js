import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import './NavBar.css'
const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand><NavLink className="link-style" to="/home">Fix Tech</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link><NavLink className="text-light mr-3" to="/home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/aboutUs">About Us</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/dashboard">Dashboard</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/projects">Projects</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/contact">Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light mr-3" to="/admin">Admin</NavLink></Nav.Link>
                </Nav>
                {
                    !loggedInUser.isSignedIn ? <Link to="/login"><button className="btn btn-warning">Login</button></Link> : <p style={{ color: 'cyan', marginTop: '8px', fontWeight: 'bold' }}>{loggedInUser.name}</p>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;