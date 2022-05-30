import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Signup from "./pages/SignupPage/Signup";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/LoginPage/Login";
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
    </Switch>
  );
}

export default App;
