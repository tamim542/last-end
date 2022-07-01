import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

   
   

      let location = useLocation();
  let from = location.state?.from?.pathname || '/'

  const handleEmailField = (event) => {
    const email = event.target.value;
    setEmail(email);
  }
  const handlePassworField = (event) => {
    const password = event.target.value;
    setPassword(password);
  }

  const handleForm = async(event) => {
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value
    await signInWithEmailAndPassword(email, password)
  
  }

  
  
   
  if (user) {
    navigate(from, { replace: true });
}

      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      // if (user) {
      //   return (
      //     <div>
      //       <p>Signed In User: {user?.email}</p>
      //     </div>
      //   );
      //}
    return (
        <div>
            <div style={{ minHeight: '100vh'}}>
      <div className='take-center'>
        <div className='login-form'>

          <form className='form-control' onSubmit={handleForm}>
            <h1 style={{ color: '#3a0abe' }}>Login</h1>
            <span>Email</span>
            <br />
            <input onBlur={handleEmailField} ref={emailRef} type="email" name='email' className='email-field' required />
            <br />

            <span>password</span>
            <br />

            <input onBlur={handlePassworField} ref={passwordRef} type="password" name='pass' className='password-field' required />
            <br />
            <br />
            <button className='button-field'><span style={{ color: 'white', fontWeight: 'bold' }}>Login</span></button>
            <br />
          </form>
          <p>Project Maintain Task?<Link className='account-color' to="/signup">create an account</Link></p>
          {/* <p>Forget Password? <span className='reset-password' onClick={resetPassword}>Reset Password</span> </p> */}
        </div>
      </div>
        </div>
        </div>
    );
};

export default Login;