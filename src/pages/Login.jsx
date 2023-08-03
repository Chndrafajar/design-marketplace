import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="row">
          <div className="logo">
            <NavLink className="link" to={'/'}>
              Logo
            </NavLink>
          </div>
        </div>
        <div className="row bottom">
          <div className="col-lg-7">
            <h2>Welcome back to the world’s market place for design</h2>
            <img src="/images/sign.png" alt="" />
          </div>
          <div className="col-lg-5">
            <h3 className="titleSignin">Login to Creative</h3>
            <form action="" className="formSignin">
              <input type="text" placeholder="Username" className="formInput" />
              <input type="password" placeholder="Password" className="formInput" />
              <div className="loginForPas">
                <button>Login</button>
                <NavLink>Forgot Password?</NavLink>
              </div>

              <div className="garis">
                <div></div>
                <span>Or</span>
                <div></div>
              </div>
              <span className="btnGoogle">
                <img src="/icons/google.svg" alt="" />
                Login With Google
              </span>
              <div className="titlePertanyaan">
                <h5>
                  Don't have account yet?<NavLink to={'/signup'}>Sign Up!</NavLink>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
