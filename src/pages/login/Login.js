import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../tools/images/login.jpg.crdownload'
import { AuthContext } from '../../shares/context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const { login } = useContext(AuthContext)
    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='mt-5'>


            {/* cart */}


            <Card>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        <Form onSubmit={loginHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p>don't have an account?<Link to='/register'>Signup for free</Link></p>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;