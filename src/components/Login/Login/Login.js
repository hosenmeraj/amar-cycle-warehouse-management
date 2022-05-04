import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-25 mx-auto py-4'>
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Do you have any account? <Link to='/register' className='text-decoration-none'>Register</Link> </p>
                <p>Forgot Your Password? <button className='btn btn-link text-decoration-none text-primary'>Reset Password</button></p>
            </Form>
        </div>
    );
};

export default Login;