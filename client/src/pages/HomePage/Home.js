import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/Product/ProductList";
import Banner from "../../components/Banner/Banner";
import "./Home.scss";

const Home = () => {
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
