import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./ProductPage.css";
import imgShoe01 from "../../assets/images/shoe_01.jpg";
import { useParams } from "react-router-dom";

const Product = () => {
  const [amount, setAmount] = useState(1);

  let shoeID = useParams().id;
  console.log(shoeID);

  return (
    <div>
      <Header />
      <div className="container-wrapper">
        <div className="imageContainer">
          <img className="imageShoe" src={imgShoe01} alt="Error" />
        </div>
        <div className="infoContainer">
          <div className="title">Shoe_{shoeID}</div>
          <div className="introduction">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <br />
          <span className="price">20000 đ.</span>
          <div className="filterContainer">
            <div className="filter">
              <div className="filterTitle">Color</div>
              <select className="select" defaultValue="Green">
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Gray</option>
                <option>Orange</option>
              </select>
            </div>
            <div className="filter">
              <div className="filterTitle">Size</div>
              <select className="select" defaultValue="30">
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
              <button type="button" onClick={() => setAmount(amount - 1)}>
                -
              </button>
              <div className="amount">{amount}</div>
              <button type="button" onClick={() => setAmount(amount + 1)}>
                +
              </button>
            </div>
            <button type="button" className="cartBtn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
