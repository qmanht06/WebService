import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/Product/ProductList";
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-body">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
