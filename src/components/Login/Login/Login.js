import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confrimPassword: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        genaral: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: '' })
        }
        else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: '' })
        }
    }
    const handlePassword = event => {
        const passworRegex = /.{6,}/
        const validPassword = passworRegex.test(event.target.value)
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "Minimum eight characters, one letter and one number" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleRegister = event => {
        event.preventDefault()
        const email = userInfo.email
        const password = userInfo.password
        signInWithEmailAndPassword(email, password)
    }
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])
    useEffect(() => {
        const error = hookError
        if (error) {
            switch (error?.code) {
                case "auth/Invaild-email":
                    toast('Invalid email Provided')
                    break;
                case "auth/Invaild-password":
                    toast('Wrong password Provided')
                    break;
                default:
                    toast('something went wrong')
            }
        }
    }, [hookError])

    return (
        <div className='w-25 mx-auto py-4'>
            <h1>Login</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} required />
                    {errors?.email && <p className='error-message'>{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword} required />
                    {errors?.password && <p className='error-message'>{errors.password}</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Do you have any account? <Link to='/register' className='text-decoration-none'>Register</Link> </p>
                <p>Forgot Your Password? <button className='btn btn-link text-decoration-none text-primary' onClick={handleReset}>Reset Password</button></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;