import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/Product/ProductList";
import Banner from "../../components/Banner/Banner";
import "./Home.scss";

const Home = () => {

   const userLogin = useSelector((state) => state.userLogin);
   const { loading, error, userInfo } = userLogin;
  const history = useHistory();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo.permission === "Admin") {
  //     history.push("/admin");
  //   }
  // }, [history, userInfo]);

  return (
    <div>
      <Header />
      <div className="home-body">
        <Banner />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
