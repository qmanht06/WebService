import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";

// import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product/:id">
        <ProductPage />
      </Route>
    </Switch>
  );
}

export default App;
