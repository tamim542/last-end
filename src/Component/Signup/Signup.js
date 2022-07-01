import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';


const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error1, setError1] = useState('');
    const navigate=useNavigate();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      
      const handleEmailField=(event)=>{
        const email=event.target.value;
        setEmail(email);
}
const handlePassworField=(event)=>{
        const password=event.target.value;
        setPassword(password);
}
const handleConfirmPassworField=(event)=>{
        const confirm=event.target.value;
        setConfirmPassword(confirm);
}




const handleForm=(event)=>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError1('passwords did not match');
        return;
    }







    else if(password.length <8){
        setError1('Password must be 8 characters or longer');
        return;
    }else{
        createUserWithEmailAndPassword(email, password);
    //    console.log("ko it is fine===",email);
    //     // Name, Email, Mobile Number, Address, City, State, Country, Company Name, Occupation, Years of Experience

    //     const name = event.target.name.value;
    //   //  const email = event.target.email.value;
    //     const phone = event.target.phone.value;
    //     const address = event.target.address.value;
    //     const city = event.target.city.value;
    //     const state = event.target.state.value;
    //     const country = event.target.country.value;
    //     const companynam = event.target.companynam.value;
    //     const occupation = event.target.occupation.value;
    //     const experience = event.target.experience.value;
       
    //     const item = {name, email, phone, address, city, state, country, companynam, occupation, experience };
    //     fetch('http://localhost:5000/profiledoc', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(item)
    //     })

    //         .then(response => response.json())
    //         .then(data => console.log(data));

            event.target.reset();
    }
   
    
    if(user){
        navigate('/');
    }
    

} 


    return (
        <div>
              <div >
            <h1>{error1}</h1>
            <div className='signup-center'>
            <div className='signUp-form'>
            <form className='form-control' onSubmit={handleForm}>
                
                <h1 style={{color:'#31c75e'}}>SignUP</h1>
                <span>Name</span>
                <br/>
                <input  type="text" name='name' id='email-form' required/>
                <br/>
                <span>Email</span>
                <br/>
                <input onBlur={handleEmailField} type="email" name='email' id='email-form' required/>
                <br/>
              
                <span>password</span>
                <br/>
                
                <input onBlur={handlePassworField} type="password" name='password' id='password-form' required/>
                <br/>
                <br/>
                <span>Confirm password</span>
                <br/>
                <input onBlur={handleConfirmPassworField} type="password" name='confirm' id='password-form' required/>
                <br/>
                <br/>
                <button className='button-form'><span style={{color:'white'}}>Sign Up</span></button>
                <br/>
            </form>
            <p>Have an already account?<Link className='login-color' to="/login"> Login</Link></p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;