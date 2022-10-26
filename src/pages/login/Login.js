import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../tools/images/login.jpg.crdownload'
import { AuthContext } from '../../shares/context/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { login, googleLogin, githubLogin } = useContext(AuthContext)

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";



    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }
    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                setError(user)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })


    }
    const githubLoginHandler = (vi) => {
        githubLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                setError(user)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

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
                        {/* google signup  */}
                        <div className='d-flex'>
                            <Button onClick={googleLoginHandler} className='' variant="outline-primary">
                                <FaGoogle className='me-1' icons={FaGoogle}></FaGoogle>
                                SignIn with Google</Button>
                            <Button onClick={githubLoginHandler} className='ms-3' variant="outline-dark">
                                <FaGithub className='me-2' icons={FaGithub}></FaGithub>
                                SignIn with Gighub</Button>
                        </div>
                    </Card.Text>
                    {
                        error ? <p className='bg-warning rounded p-2 text-danger'>{error}</p> : <></>
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;