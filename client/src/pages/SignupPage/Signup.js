import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  
  return (
    <div>
      <div className="d-flex align-item-center justify-content-center container">
        <div className="w-100 w-400 ">
          <div className="logo">
            <Link to="/">
              <img
                className="logoImg"
                src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
                alt="amazon-logo"
              />
            </Link>
          </div>
          <div className="card ">
            <div className="card-body ">
              <h2 className="text-center mb-4 font-300">Sign Up</h2>
              <form className="align-item-center justify-content-center text-center">
                <div className="form-group">
                  <label className="text-left font-200">Email</label>
                  <input className="form-control"></input>
                </div>
                <div className="form-group">
                  <label className="text-left font-200">Password</label>
                  <input className="form-control"></input>
                </div>
                <div className="form-group">
                  <label className="text-left font-200">
                    Password Confirmation
                  </label>
                  <input className="form-control"></input>
                </div>
                <button type="submit" className="w-100 btn">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="text-center w-100 mt-2 font-150">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
