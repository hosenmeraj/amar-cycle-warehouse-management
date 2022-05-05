
import React, { useEffect, useState } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerificatio: true });
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
    const handleConfrimPassword = event => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confrimPassword: event.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "Password do not Match" })
            setUserInfo({ ...userInfo, confrimPassword: "" })
        }
    }
    const handleRegister = event => {
        event.preventDefault()
        const email = userInfo.email
        const password = userInfo.password
        createUserWithEmailAndPassword(email, password)
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
        <div className='w-25 mx-auto py-4 register'>
            <h1>Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} required />
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword} required />
                    {errors.password && <p className='error-message'>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confrim-Password" onChange={handleConfrimPassword} required />
                    {errors.confrimPassword && <p className='error-message'>{errors.confrimPassword}</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>Already have an account? <Link to="/login" className='text-decoration-none'>Login</Link></p>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;