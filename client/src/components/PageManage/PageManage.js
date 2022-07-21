import React, { useEffect } from "react";
import classNames from "classnames/bind";
import style from "./PageManage.module.scss";
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as selectors from "../../react-redux/selectors";
import { fetchAllProducts } from "../../react-redux/actions/productActions";

const cx = classNames.bind(style);

function PageManage(props) {
  const { productItemList, fetchAllProducts, types } = props;
  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log("Product list: ", productItemList);

  let headerComponent = (
    <>
      <h4 className={cx("header")}>Quản lý người dùng</h4>
      <Button size="big" status="primary" title="Thêm người dùng"></Button>
    </>
  );
  let tableTitle = (
    <tr className={cx("item")}>
      <th className={cx("title__contents")}>#</th>
      <th className={cx("title__contents")}>Email</th>
      <th className={cx("title__contents")}>Phân quyền</th>
      <th className={cx("title__contents")}>Username</th>
      <th className={cx("title__contents")}>Fullname</th>
      <th className={cx("title__contents")}>Thêm</th>
    </tr>
  );
  const TableItem = (props) => {
    const { productName, productImage, productDescription, productPrice, _id } =
      props.item;
    return (
      <tr className={cx("item")}>
        <td className={cx("title__contents")}>#</td>

        <td className={cx("title__contents")}>
          <Link to={"/admin/product/" + _id}>{productName}</Link>
        </td>

        <td className={cx("title__contents")}>
          <img src={productImage} alt="Loading Error!" />
        </td>
        <td className={cx("title__contents")}>{productDescription}</td>
        <td className={cx("title__contents")}>{productPrice}</td>
        <td className={cx("title__contents")}>
          <i className="fa-solid fa-trash-can fa-xs"></i>
        </td>
      </tr>
    );
  };
  if (types === "product") {
    headerComponent = (
      <>
        <h4 className={cx("header")}>Quản lý sản phẩm</h4>
        <Link to="/admin/product/create">
          <Button size="big" status="primary" title="Thêm bài viết"></Button>
        </Link>
      </>
    );
    tableTitle = (
      <tr className={cx("item")}>
        <th className={cx("title__contents")}>#</th>
        <th className={cx("title__contents")}>Tên sản phẩm</th>
        <th className={cx("title__contents")}>Ảnh</th>
        <th className={cx("title__contents")}>Description</th>
        <th className={cx("title__contents")}>Price</th>
        <th className={cx("title__contents")}>Thêm</th>
      </tr>
    );
    return (
      <div className={cx("grid", "post-manage")}>
        <div className={cx("wrapper", "post-manage__header")}>
          {headerComponent}
        </div>
        <table className={cx("wrapper")}>
          <thead className={cx("table__title")}>{tableTitle}</thead>
          <tbody className={cx("table__item")}>
            {productItemList.map((item) => (
              <TableItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (types === "order") {
    headerComponent = (
      <>
        <h4 className={cx("header")}>Quản lý đặt hàng</h4>
        <Link to="/admin/product/create">
          <Button size="big" status="primary" title="Thêm đặt hàng"></Button>
        </Link>
      </>
    );
    tableTitle = (
      <tr className={cx("item")}>
        <th className={cx("title__contents")}>#</th>
        <th className={cx("title__contents")}>Tên khách hàng</th>
        <th className={cx("title__contents")}>Số điện thoại</th>
        <th className={cx("title__contents")}>Địa chỉ</th>
        <th className={cx("title__contents")}>Giá trị đơn hàng</th>
        <th className={cx("title__contents")}>Xoá</th>
      </tr>
    );
    return (
      <div className={cx("grid", "post-manage")}>
        <div className={cx("wrapper", "post-manage__header")}>
          {headerComponent}
        </div>
        <table className={cx("wrapper")}>
          <thead className={cx("table__title")}>{tableTitle}</thead>
          <tbody className={cx("table__item")}>
            {productItemList.map((item) => (
              <TableItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const dataSource = selectors.productSelector(state).allProducts;
  //   console.log(dataSource);
  //   const searchText = state.filters.searchText.toLowerCase();

  //   const productItemList = dataSource.filter((product) => {
  //     return product.productName.toLowerCase().includes(searchText);
  //   });

  return { productItemList: dataSource };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("ok");
  return {
    fetchAllProducts: (data) => dispatch(fetchAllProducts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageManage);
