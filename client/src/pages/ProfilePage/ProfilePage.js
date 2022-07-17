import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { register, updateProfile } from "../../react-redux/actions/userActions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

import styles from "./ProfilePage.scss";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  const history = useHistory();
  //Update Info of User
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      setUserName(userInfo.userName);
      setEmail(userInfo.email);
      setFullName(userInfo.fullName);
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password confirmation do not match!");
    } else {
      dispatch(updateProfile({ userName, email, fullName, password }));
    }
  };
  return (
    <div>
      <Header />
      <div className="d-flex align-item-center justify-content-center container">
        <div className="w-100 w-400 ">
          <div className="card mt-80">
            <div className="card-body ">
              <h2 className="text-center mb-4 font-300">User Profile</h2>
              {error && <ErrorMessage variant="danger">{error} </ErrorMessage>}
              {message && (
                <ErrorMessage variant="danger">{message}</ErrorMessage>
              )}
              {loading && <Loading />}
              {/* {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )} */}
              <form
                onSubmit={submitHandler}
                className="align-item-center justify-content-center text-center"
              >
                <div className="form-group" controlId="userName">
                  <label className="text-left font-200">User Name</label>
                  <input
                    type="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group" controlId="fullName">
                  <label className="text-left font-200">User Full Name</label>
                  <input
                    type="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group" controlId="email">
                  <label className="text-left font-200">Email</label>
                  <input
                    type="email"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    readOnly
                    className="form-control"
                  />
                </div>
                <div className="form-group" controlId="password">
                  <label className="text-left font-200">New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group" controlId="confirmPassword">
                  <label className="text-left font-200">
                    New Password Confirmation
                  </label>
                  <input
                    type="confirmpassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="w-100 btn">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
