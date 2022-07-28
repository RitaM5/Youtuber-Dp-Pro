import React, { useEffect, useRef } from 'react';
 import './Login.css' 
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import banner1 from "../../../../public/images/banner-1.png"
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    /* let from = location.state?.from?.pathname || "/"; */
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    /* if (user) {
        navigate(from, { replace: true });
    } */
    useEffect(() =>{
        if(user){
            navigate("/home");
        }
    },[user]) ;
    
    if (error) {
        errorElement = <p className="text-danger" style={{ color: 'red' }}>Error: {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please inter your email address')
        }

    }
    return (
        <div className="my-3 d-flex justify-content-center">
            <div className='p-2 rounded' style={{backgroundColor:"darkkhaki", height:""}}>
            <h2 style={{ textAlign: 'center' }} className='text-center mt-2 login-heading'>Please Login</h2>
        <div>
        <Form onSubmit={handleSubmit}>
                    <Form.Group className="py-1 my-2" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" style={{ width: "300px" }} required />
                    </Form.Group>
                    <Form.Group className="py-1" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" style={{ width: "300px" }} required />
                    </Form.Group>
                    <Button type="submit" variant="" className="px-4 fs-5 text-white my-2 border-0" style={{ width: "300px", borderRadius: "50px",backgroundColor: "rgb(117, 160, 216)"  }}>
                        Login
                    </Button>
                </Form>
                {errorElement}
                <span>Are you visit my site?<Link to="/register" className='text-danger pe-auto text-decoration-none'>Please Register</Link> </span>
                <p><button className='text-danger pe-auto text-decoration-none btn btn-link' onClick={resetPassword}>Forget password?</button></p>
                <ToastContainer />
                <SocialLogin></SocialLogin>
        </div>
            </div>

        </div>
    );
};

export default Login;
/* 
 <div>
             <div>
                <img src={banner1} className="w-100"></img>
            </div> 
            <div className='container w-50 mx-auto login-page mb-3 p-4 mt-2 rounded'>
                <h2 className='text-center mt-2 login-heading'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button type="submit" variant="" style={{ backgroundColor: "rgb(104, 165, 14)" }} className="px-4 fs-5 text-white my-2 border-0">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>Are you visit my site? <Link to="/register" className='text-danger pe-auto text-decoration-none'>Please Register</Link> </p>
                <p>Forget password?<button className='text-danger pe-auto text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password</button></p>
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </div>

        </div>
 */