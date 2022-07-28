import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { Button } from 'react-bootstrap';
import foodvlog1 from "../../../../public/images/foodvlog1.png"
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        //const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user]);

    return (
        <div className="my-3 d-flex justify-content-center">
            <div className='p-2 rounded' style={{backgroundColor:"hsl(0, 53%, 82%)", height:"300px"}}>
                <h2 style={{ textAlign: 'center' }}>Register Now</h2>
                <div className="p-3" >
                    <form onSubmit={handleRegister}>
                        <input type="email" name="email" id="" placeholder='Email Address' className="py-1 my-2" style={{ width: "300px" }} required />
                        <br />
                        <input type="password" name="password" id="" placeholder='Password' className="py-1" style={{ width: "300px" }} required />
                        <br />
                        <Button type="submit" variant="danger my-2" className="my-3" style={{ width: "300px", borderRadius: "50px" }}>Register</Button>
                        <br />
                    </form>
                    <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login</Link> </p>
                </div>
            </div>
        </div>

    );
};

export default Register;
/*
  <div>
           {/*  <div>
                <img src={foodvlog1} className="w-100 h-50"></img>
            </div>
            <div className='register-page p-3 my-4'>
            <h2 style={{ textAlign: 'center' }}>Register Now</h2>
            <form onSubmit={handleRegister}>

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <Button type="submit" variant="danger my-2">Register</Button>
            </form>
            <input type="checkbox" label="Check me out" />
            <label className="mx-2">check box</label>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login</Link> </p>
            </div>
        </div>}
 */