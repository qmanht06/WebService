import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Signup from "./pages/SignupPage/Signup";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/LoginPage/Login";
import CartPage from "./pages/CartPage/CartPage";
import Profile from "./pages/ProfilePage/ProfilePage";
import AdminHomePage from "./pages/admin/HomePage";
import PageManage from "./pages/PageManage/PageManage";
import OrderManage from "./pages/OrderManagePage/OrderManage";
import Category from "./components/Category/Category";
import PostManagePage from "./pages/PostManagePage/PostManagePageCreate";
import Payment from "./pages/Payment/Payment";
import OrderManageDetail from "./pages/OrderManagePage/OrderManageDetail";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/product/create">
        <PostManagePage />
      </Route> */}
      <Route path="/product/:id">
        <ProductPage />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/user/order/:id">
        <OrderManageDetail />
      </Route>

      <Route exact path="/user/order">
        <OrderManage />
      </Route>

      <Route exact path="/user/payment">
        <Payment />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route path="/admin" component={AdminHomePage} />

      {/* <Route exact path="/admin/order">
        <Category />
      </Route> */}
    </Switch>
  );
}

export default App;
