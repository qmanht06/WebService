import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./Header.module.scss";
import { UilSearch } from "@iconscout/react-unicons";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

import { connect, useDispatch, useSelector } from "react-redux";
import { searchFilterChanged } from "../../react-redux/actions/filterActions";
import { fetchCartList } from "../../react-redux/actions/cartActions";
import * as selectors from "../../react-redux/selectors";
import { logout } from "../../react-redux/actions/userActions";

const Header = (props) => {
  //const [userName, setUserName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [searchText, setSearchText] = useState("");
  const { fetchCartList, searchFilterChanged } = props;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };

  useEffect(() => {
    fetchCartList();
  }, []);
  // let quantity = localStorage.getItem('quantity') || props.quantity;
  let quantity = props.quantity;

  const handleSearchTextChanged = (e) => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const handleEnterPressed = (e) => {
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      searchFilterChanged(searchText);
    }
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
          onChange={(e) => handleSearchTextChanged(e)}
          onKeyPress={(e) => handleEnterPressed(e)}
          value={searchText}
        />
        <div
          className={styles.searchIcon}
          onClick={() => searchFilterChanged(searchText)}
        >
          <UilSearch size="24" color="#000" />
        </div>
      </div>

      <div className={styles.userNav}>
        <Link to="/login" className={styles.headerNav}>
          <span className={styles.headerNavTextFirst}>Hello,</span>
          <div>
            {userInfo ? (
              <span
                className={styles.headerNavTextSecond}
              >{`${userInfo?.userName} `}</span>
            ) : (
              <span className={styles.headerNavTextSecond}>Sign In</span>
            )}
          </div>
        </Link>
        {userInfo && (
          <ul className={styles.userSubNav}>
            <Link to="/profile" className={styles.headerUserSubnav}>
              Manage Acount
            </Link>
            <Link to="/user/order" className={styles.headerUserSubnav}>
              Manage Orders
            </Link>
            {/* <Link to="/user/changepassword" className={styles.headerUserSubnav}>
              Change password
            </Link> */}
            <button
              onClick={logoutHandler}
              className={styles.headerUserSubnav}
              style={{ textAlign: "left" }}
            >
              Log out
            </button>
          </ul>
        )}
      </div>
      {/* <Link to="/user/order" className={styles.headerNav}>
        <span className={styles.headerNavTextFirst}>Returns</span>
        <span className={styles.headerNavTextSecond}>&amp; Order</span>
      </Link> */}
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
  const quantity = selectors.cartSelector(state).cartTotalQuantity;
  return { quantity: quantity };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFilterChanged: (searchText) =>
      dispatch(searchFilterChanged(searchText)),
    fetchCartList: () => dispatch(fetchCartList()),
  };
};

export default connect(mapStateToPropss, mapDispatchToProps)(Header);
