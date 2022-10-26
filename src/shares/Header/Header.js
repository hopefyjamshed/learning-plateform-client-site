import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Image, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(e => {
                console.error(e)

            })
    }



    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">W.infinity.HOME</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-xl text-white text-decoration-none me-3' to="/">Courses</Link>
                            <Link className='text-xl text-white text-decoration-none me-3' to="/faq">FAQ</Link>
                            <Link className='text-xl text-white text-decoration-none me-3' to="/blog">Blog</Link>

                        </Nav>
                        <Nav>
                            {
                                user?.uid
                                    ?
                                    <Button variant="outline-light" onClick={logOutHandler}>Logout</Button>
                                    :
                                    <>
                                        <Link to='/login'><Button variant="outline-light">Login</Button></Link>
                                        <Link to='/register'><Button className='ms-3' variant="outline-light">Register</Button></Link>
                                    </>
                            }

                            <Nav.Link href="#deets"></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.uid
                                        ? <Image title={user?.displayName} roundedCircle
                                            style={{ width: '30px', height: '30px' }}
                                            src={user?.photoURL} alt="" />
                                        :
                                        <></>
                                }
                                {/* dark light button group  */}
                                <ToggleButtonGroup className='ms-3' type="radio" name="options" defaultValue={1}>

                                    <ToggleButton variant="light" id="tbg-radio-2" value={2}>
                                        light mode
                                    </ToggleButton>
                                    <ToggleButton variant='dark' id="tbg-radio-3" value={3}>
                                        Dark mode
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;