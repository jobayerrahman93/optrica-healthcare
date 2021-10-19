import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../Firebase/UseFirebase';
import './Header.css';
const Header = () => {

    const {user,logOut}=UseFirebase();
    
    
    return (
        <div className="header" >
         
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Optrica</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/research" >Research</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>

                            <span className="mt-3 mx-2">{user.displayName} </span>
                        
                         { user.email?
                            <li className="nav-item">
                              <button className="btn btn-outline-info" onClick={logOut}>Log Out</button>
                            </li>:
                             <li className="nav-item">
                             <Link to="/login">Login</Link>
                         </li>
                         }
                        </ul>
                    </div>
                </div>
            </nav>
           </div>
    
    );
};

export default Header;