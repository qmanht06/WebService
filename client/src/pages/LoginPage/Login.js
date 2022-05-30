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
      <div class="d-flex align-item-center justify-content-center container">
        <div class="w-100 w-400">
          <div class="card ">
            <div class="card-body ">
              <h2 class="text-center mb-4">Log In</h2>
              <form class="align-item-center justify-content-center text-center">
                <div class="form-group">
                  <label class>Email</label>
                  <input class="form-control"></input>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control"></input>
                </div>
                <button type="submit" class="w-100 btn">
                  Log In
                </button>
              </form>
            </div>
          </div>

          <div class="text-center w-100 mt-2">
            Need an account? <Link to="/Signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
