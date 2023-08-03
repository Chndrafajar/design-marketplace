import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
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
            <h3 className="titleSignin">Sign Up to Creative</h3>
            <form action="" className="formSignin">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                <input type="text" placeholder="First Name" className="formInput" style={{ width: '100%' }} />
                <input type="text" placeholder="Last Name" className="formInput" style={{ width: '100%' }} />
              </div>
              <input type="text" placeholder="Username" className="formInput" />
              <input type="email" placeholder="Email" className="formInput" />
              <input type="password" placeholder="Password" className="formInput" />
              <button>Create Account</button>
              <div className="garis">
                <div></div>
                <span>Or</span>
                <div></div>
              </div>
              <span className="btnGoogle">
                <img src="/icons/google.svg" alt="" />
                Sign Up With Google
              </span>
              <div className="titlePertanyaan">
                <h5>
                  Have an account?<NavLink to="/login">Log in!</NavLink>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
