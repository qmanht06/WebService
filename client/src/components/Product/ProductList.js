import React, { useState, useEffect } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import Paginaiton from "../Pagination/Pagination";
import { fetchProductList } from "../../react-redux/actions/productActions";
import { Products } from "../../data/Products";

const ProductList = (props) => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalRows: 21,
  });
  // props.productItemList
  const productItemList = Products;
  // const {fetchProductList} = props;
  // const containerStyle = {
  //   margin
  // }

  // useEffect(() => {
  //   fetchProductList();
  // },[]);

  const handlePageChanged = (newPage) => {
    if (pagination.page !== newPage) {
      setPagination({ ...pagination, page: Number(newPage) });
      console.log("New page:", newPage);
    } else {
      console.log("Nochange");
    }
  };

  return (
    <div style={{ margin: "6rem 5rem" }}>
      <div className="grid">
        <div className="row body">
          {productItemList.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>
      <Paginaiton pagination={pagination} onPageChanged={handlePageChanged} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const dataSource = state.products.productList;
  const searchText = state.filters.searchText.toLowerCase();

  const productItemList = dataSource.filter((product) => {
    return product.name.toLowerCase().includes(searchText);
  });

  return { productItemList: productItemList };
};

const mapDispatchToProps = (dispatch) => {
  console.log("ok");
  return {
    fetchProductList: (data) => dispatch(fetchProductList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
