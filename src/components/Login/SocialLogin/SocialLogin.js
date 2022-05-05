import React from 'react';
import auth from '../../../firebase.init';
import google from "../../../images/google.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement
    if (error) {
        errorElement = <p className='error-message'>Error: {error?.message}</p>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="bg-info w-50 d-flex mx-auto my-2 border-0 rounded btn">
                    <img src={google} alt="" style={{ width: "30px" }} />
                    <span className='px-2'>Google SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;