import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./ProductPage.scss";
import { useLocation } from "react-router-dom";
import * as selectors from "../../react-redux/selectors";
import { connect } from "react-redux";
import { addProductToCart } from "../../react-redux/actions/cartActions";
import { getSingleProduct } from "../../react-redux/actions/productActions";
// import { Products } from "../../data/Products";

const ProductPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Green");
  const [size, setSize] = useState("30");
  const { addProductToCart, getSingleProduct } = props;
  const currency = { style: "currency", currency: "VND" };

  useEffect(() => {
    getSingleProduct(shoeID);
    console.log("ok");
  }, []);

  const location = useLocation().pathname;
  // console.log("location: ", location);

  const shoeID = location.slice(9);
  console.log("shoeId: ", shoeID);

  //
  const { _id, productName, productImage, productPrice, productDescription } =
    props.data;
  // Products.find(
  //   (item) => item._id === shoeID
  // );
  // console.log("id: ", productImage);

  const handleAddToCartClicked = () => {
    const cartItem = {
      _id,
      productImage,
      productName,
      productPrice,
      productDescription,
      color,
      size,
      quantity: quantity,
    };

    addProductToCart(cartItem);
    // console.log(cartItem);
    setQuantity(1);
  };

  // const handleColorChanged = (e) => {
  //   // console.log(e.target.value);
  //   setColor(e.target.value);
  // };

  // const handleSizeChanged = (e) => {
  //   // console.log(e.target.value);
  //   setSize(e.target.value);
  // };

  return (
    <div>
      <Header />
      <div className="container-wrapper">
        <div className="image-container">
          <img className="image-shoe" src={productImage} alt="Error" />
        </div>
        <div className="info-container">
          <div className="title">{productName}</div>
          <div className="introduction">{productDescription}</div>
          <br />
          <span className="price">
            {Number(productPrice).toLocaleString("en-US", currency)}
          </span>
          <div className="filter-container">
            <div className="filter">
              <div className="filter-title">Color</div>
              <select
                className="select"
                defaultValue={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Gray</option>
                <option>Orange</option>
              </select>
            </div>
            <div className="filter">
              <div className="filter-title">Size</div>
              <select
                className="select"
                defaultValue={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="quantity-container">
              <button type="button" onClick={() => setQuantity(quantity - 1)}>
                -
              </button>
              <div className="quantity">{quantity}</div>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button
              type="button"
              className="add-btn"
              onClick={handleAddToCartClicked}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = selectors.productSelector(state);
  // console.log(data);
  return { data: data.product };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    getSingleProduct: (productId) => dispatch(getSingleProduct(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
