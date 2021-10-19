import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {

    const { googleSignIn, setIsLoading, setUserEmail, setUserPassword, createUserWithEmail, signInWithEmail,setUserName,setUser,error,setError } = useAuth();

    const [isLogin, setIsLogin] = useState(false);



    const location = useLocation();
    console.log(location.state?.from);

    const redirect_Uri = location.state?.from || "/";
    const history = useHistory();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_Uri);
            }).catch((err) => {
                
                setError(err.message);
                console.log(err.message);
                
              });
    }


    // handleEmailSignIn


    const handleEmailWithSIgn=(e)=>{
        e.preventDefault();
        signInWithEmail()
        .then((result) => {
            setUser(result.user);
            history.push(redirect_Uri);

        }).catch((err) => {

            setError(err.message);
          

        });
    }



 

    // handle email 

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setUserPassword(e.target.value);
        // console.log(e.target.value);
    }

    const handleName = (e) => {
        // console.log(e.target.value)
        setUserName(e.target.value);
        console.log(e.target.value);
    }

    const toggle = (e) => {
        setIsLogin(e.target.checked);

    }

    return (
        <div className="login-page">
            <div className="container">
                <form className="w-50 mx-auto mt-5">
                    <div className="mb-3">
                        <h3 className="mb-5">{isLogin ? "Login" : "Create a new account"}</h3>
                        {!isLogin && <div>
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input onBlur={handleName} type="text" className="form-control" id="exampleInputName" />
                        </div>
                        }

                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <span className="text-danger">{error}</span>

                    <div className="mb-3 form-check">
                        <input onClick={toggle} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">already Registered ?</label>
                    </div>

                    {isLogin ? <button onClick={handleEmailWithSIgn} className="btn btn-primary">Login</button> :
                        <button onClick={createUserWithEmail} className="btn btn-primary">Register</button>
                    }
                </form>

                <div className="text-center">
                    <p>or login with-</p>

                    <button onClick={handleGoogleSignIn} className="btn btn-warning">sign in google</button>



                </div>
            </div>
        </div>
    );
};

export default Login;