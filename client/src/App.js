import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Signup from "./pages/SignupPage/Signup";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/LoginPage/Login";
import CartPage from "./pages/CartPage/CartPage";
import Profile from "./pages/ProfilePage/ProfilePage";
import PostManagePage from "./pages/PostManagePage/PostManagePage";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
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
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/product-manage">
        <PostManagePage />
      </Route>
    </Switch>
  );
}

export default App;
