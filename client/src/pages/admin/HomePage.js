import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Statistics from "../../components/Admin/Statistics";
import NavBar from "../../components/NavBar/NavBar";
import Category from "../../components/Category/Category";
import Order from "../OrderManagePage/AdminOrderManage";
import PageManage from "../../pages/PageManage/PageManage";
import PostManagePageCreate from "../PostManagePage/PostManagePageCreate";
import PostManagePageUpdate from "../PostManagePage/PostManagePageUpdate";

const HomePage = () => {
  // let { path } = useRouteMatch();
  //   console.log(path);
  return (
    <div>
      <NavBar />
      <div className="grid">
        <Switch>
          <Route exact path="/admin/category">
            <Category />
          </Route>
          <Route exact path="/admin/product">
            <PageManage type="product"></PageManage>
          </Route>
          <Route exact path="/admin/product/create">
            <PostManagePageCreate></PostManagePageCreate>
          </Route>
          <Route exact path="/admin/product/:id">
            <PostManagePageUpdate></PostManagePageUpdate>
          </Route>
          <Route exact path="/admin/order">
            <PageManage type="order"></PageManage>
          </Route>
          <Route exact path="/admin/order/create">
            <PostManagePageCreate></PostManagePageCreate>
          </Route>
          <Route exact path="/admin/order/:id">
            <PostManagePageUpdate></PostManagePageUpdate>
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
