import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { UilSearch } from "@iconscout/react-unicons";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

import { connect } from "react-redux";
import { searchFilterChanged } from "../../react-redux/actions/filterActions";
import { cartSelector } from "../../react-redux/selectors";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const searchFilterChanged = props.searchFilterChanged;
  const quantity = props.quantity;

  const handleSearchTextChanged = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    searchFilterChanged(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.logoImg}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={handleSearchTextChanged}
          value={searchText}
        />
        <div className={styles.searchIcon}>
          <UilSearch size="24" color="#000" />
        </div>
      </div>

      <div className={styles.userNav}>
        <Link to="/login" className={styles.headerNav}>
          <span className={styles.headerNavTextFirst}>Hello,</span>
          <span className={styles.headerNavTextSecond}>User Name</span>
        </Link>
        <ul className={styles.userSubNav}>
          <Link to="/user/profile" className={styles.headerUserSubnav}>
            Manage Acount
          </Link>
          <Link to="/user/order" className={styles.headerUserSubnav}>
            Your order
          </Link>
          <Link to="/user/changepassword" className={styles.headerUserSubnav}>
            Change password
          </Link>
          <button
            className={styles.headerUserSubnav}
            style={{ textAlign: "left" }}
          >
            Log out
          </button>
        </ul>
      </div>
      <Link to="/user/order" className={styles.headerNav}>
        <span className={styles.headerNavTextFirst}>Returns</span>
        <span className={styles.headerNavTextSecond}>&amp; Order</span>
      </Link>
      <Link
        to="/cart"
        className={styles.headerNav}
        style={{ flexDirection: "row" }}
      >
        <div style={{ position: "relative" }}>
          <span className={styles.quantity}>{quantity}</span>
          <UilShoppingCartAlt size="30" color="#fff" />
        </div>
        <span className={styles.cartText}>Cart</span>
      </Link>
    </header>
  );
};

const mapStateToPropss = (state) => {
  const quantity = cartSelector(state).cartTotalQuantity;
  return {quantity: quantity}
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchFilterChanged: (searchText) =>
      dispatch(searchFilterChanged(searchText)),
  };
};

export default connect(mapStateToPropss, mapDispatchToProps)(Header);
