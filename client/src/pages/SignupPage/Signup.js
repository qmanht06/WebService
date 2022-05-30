import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
//import { useAuth } from "../contexts/AuthContext";
const Signup = () => {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  // const { signup } = useAuth();
  //const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match");
  //   }

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to create an account");
  //   }

  //   setLoading(false);
  // }

  return (
    <div>
      <div class="d-flex align-item-center justify-content-center container">
        <div class="w-100 w-400 ">
          <div className="logo">
            <Link to="/">
              <img
                className="logoImg"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </Link>
          </div>
          <div class="card ">
            <div class="card-body ">
              <h2 class="text-center mb-4">Sign Up</h2>
              <form class="align-item-center justify-content-center text-center">
                <div class="form-group">
                  <label class>Email</label>
                  <input class="form-control"></input>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control"></input>
                </div>
                <div class="form-group">
                  <label>Password Confirmation</label>
                  <input class="form-control"></input>
                </div>
                <button type="submit" class="w-100 btn">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div class="text-center w-100 mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
