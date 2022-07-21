import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { login } from "../../react-redux/actions/userActions";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const history = useHistory();

  //if login then redirect to home page
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    if (userInfo) {
      if (userInfo.permission === "Admin") {
        history.push("/admin");
      } else history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

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
              <h2 className="text-center mb-4 font-300">Log In</h2>
              {error && <ErrorMessage variant="danger">{error} </ErrorMessage>}
              {loading && <Loading />}

              <form
                onSubmit={submitHandler}
                className="align-item-center justify-content-center text-center"
              >
                <div className="form-group">
                  <label className="text-left font-200">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="text-left font-200">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="w-100 btn">
                  Log In
                </button>
              </form>
            </div>
          </div>

          <div className="text-center w-100 mt-2 font-150">
            Need an account? <Link to="/Signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
