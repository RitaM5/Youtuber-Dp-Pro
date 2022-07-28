import React, { useEffect } from 'react';
//import google from "../../../../images/social/google-icon.png";
//import auth from '../../../../firebase.init';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    useEffect(() =>{
        if(user){
            navigate("/home");
        }
    },[user]) ;
    
    if (error) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message}</p>
        </div>
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="fs-5 mx-2 mt-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn d-block mx-auto w-50" style={{backgroundColor:"rgb(238, 221, 221"}}>
                   <img style={{width:"21px"}} src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <span className="px-2">Google SignIn</span>
                </button>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;
