import React, {useEffect} from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { fetchProductList } from "../../react-redux/actions/productActions";

const ProductList = (props) => {
  const productItemList = props.productItemList;
  const {fetchProductList} = props;

  useEffect(() => {
    fetchProductList();
  },[])

  return (
    <div className="grid">
      <div className="row body">
        {productItemList.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
