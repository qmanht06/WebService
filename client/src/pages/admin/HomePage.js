import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Statistics from "../../components/Admin/Statistics";
import NavBar from "../../components/NavBar/NavBar";
import Category from "../../components/Category/Category";
import Order from "../../components/Order/Order";

const HomePage = () => {
  let { path } = useRouteMatch();
  //   console.log(path);
  return (
    <div>
      <NavBar />
      <div className="grid">
        <Switch>
          <Route exact path="/admin/category">
            <Category />
          </Route>
          <Route exact path="/admin/order">
            <Order />
          </Route>
          <Route exact path="/admin/home">
            <Statistics />
          </Route>
          <Redirect to="/admin/home" />
        </Switch>
      </div>
    </div>
  );
};

export default HomePage;
