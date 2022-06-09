import React, { useRef, useState } from "react";
//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const { login } = useAuth();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await login(emailRef.current.value, passwordRef.current.value);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log in");
  //   }

  //   setLoading(false);
  // }

  return (
    <div>
      <div className="d-flex align-item-center justify-content-center container">
        <div className="w-100 w-400">
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
              <h2 className="text-center mb-4">Log In</h2>
              <form className="align-item-center justify-content-center text-center">
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control"></input>
                </div>
                <button type="submit" className="w-100 btn">
                  Log In
                </button>
              </form>
            </div>
          </div>

          <div className="text-center w-100 mt-2">
            Need an account? <Link to="/Signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
