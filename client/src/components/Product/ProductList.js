import React from "react";
import Product from "./Product";
import { connect } from "react-redux";

const ProductList = (props) => {
  const productItemList = props.productItemList;

  return (
    <div className="grid">
      <div className="row body">
        {productItemList.map((item) => (
          <Product key={item.id} id={item.id} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const dataSource = state.products.productList;
  const searchText = state.filters.searchText;

  const productItemList = dataSource.filter((product) => {
    return product.name.includes(searchText);
  });

  return { productItemList: productItemList };
};

export default connect(mapStateToProps)(ProductList);
