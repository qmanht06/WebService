import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./ProductPage.scss";
import { useParams, useLocation } from "react-router-dom";
import * as selectors from "../../react-redux/selectors";
import { connect } from "react-redux";
import { addProductToCart } from "../../react-redux/actions/cartActions";
import { getSingleProduct } from "../../react-redux/actions/productActions";

const ProductPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart, getSingleProduct } = props;
  const currency = { style: 'currency', currency: 'VND' };

  // useEffect(() => {
  //   getSingleProduct(shoeID);
  //   console.log("ok");
  // }, []);

  const location = useLocation().pathname;
  console.log("location: ", location);

  const shoeID = location.slice(9);
  console.log("shoeId: ", shoeID);

  const { id, name, imageURL, price } = props.data;
  console.log("id: ", id);

  const handleAddToCartClicked = () => {
    const cartItem = {
      id: id,
      url: imageURL,
      name: name,
      price: price,
      quantity: quantity,
    };

    addProductToCart(cartItem);
    console.log(cartItem);
    setQuantity(1);
  }

  return (
    <div>
      <Header />
      <div className="container-wrapper">
        <div className="image-container">
          <img className="image-shoe" src={imageURL} alt="Error" />
        </div>
        <div className="info-container">
          <div className="title">{name}</div>
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
          <span className="price">{Number(price).toLocaleString('en-US', currency)}</span>
          <div className="filter-container">
            <div className="filter">
              <div className="filter-title">Color</div>
              <select className="select" defaultValue="Green">
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Gray</option>
                <option>Orange</option>
              </select>
            </div>
            <div className="filter">
              <div className="filter-title">Size</div>
              <select className="select" defaultValue="30">
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
            <button type="button" className="add-to-cart-btn" onClick={handleAddToCartClicked}>
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
  return { data: data.product }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    getSingleProduct: (productId) => dispatch(getSingleProduct(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
