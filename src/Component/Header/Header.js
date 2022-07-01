import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Link } from "react-router-dom";
import auth from '../../firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    
}
    return (
        <div>
              <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Project</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"></Link>
        </li>
       
        {/* <li className="nav-item">
          <Link className="nav-link" to="/profiledetails">ProfileDetails</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projectlist">ProjectList</Link>
        </li> */}
        {
          user?<li className="nav-item"><Link className="nav-link" to="/addtask">AddTask</Link> </li>:<span></span>
        }
        {
          user?<li className="nav-item"><Link className="nav-link" to="/completetask">CompleteTask</Link> </li>:<span></span>
        }
       
       {
        user?<li className="nav-item"><Link className="nav-link" to="/todolist">To-Do-List</Link></li>:<span></span>
       }
       {
        user?<li className="nav-item"><Link className="nav-link" to="/calender">Calender</Link></li>:<span></span>
       }

        {
          user?<span>  <li className="nav-item"><Link className="nav-link" onClick={handleSignOut} to="/signup">SignOut</Link></li></span>:  <Link className="nav-link" to="/login">Login</Link>
        }
       
      </ul>
    </div>
  </div>
</nav>
        </div>
        </div>
    );
};

export default Header;