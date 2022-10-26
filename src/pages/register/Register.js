import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shares/context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { registration,
        userName,
        varifyEmail,
        logOut } = useContext(AuthContext)
    const registerHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        registration(email, password,)
            .then(result => {
                const user = result.user
                console.log(user)
                profileHandler(name, photo)
                form.reset()

                setError('')

                emailvarificationHandler()
                toast.success('your varification email is successfully sent!')

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            });


    }
    const profileHandler = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        userName(profile)
            .then(() => { })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
        userName(name)
    }
    const emailvarificationHandler = () => {
        varifyEmail()
            .then(() => {

            })
            .catch(err => {
                console.error(err)

                setError(err)
            })
    }



    return (
        <div className='mt-5'>
            <Form onSubmit={registerHandler}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Full Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photo URl</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter photo url" />

                </Form.Group>
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
                <p>already have an account?<Link to='/login'>login</Link></p><br />
                <p className='bg-warning rounded p-2 text-danger'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;