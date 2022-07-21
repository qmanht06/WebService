import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Headers from "../../components/Header/Header";
import classNames from "classnames/bind";
import style from "./PostManagePage.module.scss";
import Button from "../../components/common/Button/Button";
import { connect } from "react-redux";
import * as selectors from "../../react-redux/selectors";
import { getSingleProduct } from "../../react-redux/actions/productActions";

const cx = classNames.bind(style);

function PostManagePage(props) {
  const { getSingleProduct } = props;

  useEffect(() => {
    getSingleProduct(shoeID);
    console.log("ok");
  }, []);

  const location = useLocation().pathname;
  // console.log("location: ", location);

  const shoeID = location.slice(15);
  console.log("shoeId: ", shoeID);

  console.log(props.data);
  const {
    _id,
    productName,
    productImage,
    productOldPrice,
    productPrice,
    productDescription,
    productSale,
    productCategory,
  } = props.data;

  return (
    <>
      {/* <Headers></Headers> */}
      <div className={cx("grid", "body")}>
        <h4 className={cx("body__title")}>Cập nhật sản phẩm</h4>
        <form method="POST" action="/api/product/create">
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Tên sản phẩm: </p>
            <input
              className={cx("body__item__input")}
              type="text"
              placeholder="Tên sản phẩm"
              value={productName}
              id="productName"
              name="productName"
            />
          </div>
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Hình ảnh: </p>
            <input
              className={cx("body__item__input")}
              type="text"
              placeholder="Hình ảnh"
              value={productImage}
              name="productImage"
              id="productImage"
            />
          </div>
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Mô tả: </p>
            <textarea
              className={cx("body__item__text-area")}
              cols="100"
              rows="10"
              value={productDescription}
              placeholder="Mô tả sản phẩm"
              id="productDescription"
              name="productDescription"
            ></textarea>
          </div>
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Giá tiền: </p>
            <input
              className={cx("body__item__input")}
              type="text"
              placeholder="Giá tiền"
              value={productPrice}
              name="productPrice"
              id="productPrice"
            />
            <p className={cx("body__item__DVT")}>VND</p>
          </div>
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Giá tiền cũ: </p>
            <input
              className={cx("body__item__input")}
              type="text"
              placeholder="Giá tiền cũ"
              value={productOldPrice}
              name="productOldPrice"
              id="productOldPrice"
            />
            <p className={cx("body__item__DVT")}>VND</p>
          </div>
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Sale: </p>
            <input
              className={cx("body__item__input")}
              type="text"
              placeholder="Sale"
              value={productSale}
              name="productSale"
              id="productSale"
            />
          </div>
          <div className={cx("body__item")}>
            <p className={cx("body__item__title")}>Danh mục: </p>
            <input
              className={cx("body__item__input")}
              type="text"
              placeholder="Danh mục"
              value={productCategory}
              name="productCategory"
              id="productCategory"
            />
          </div>
          <Button
            size="big"
            status="primary"
            title="Cập nhật bài viết"
          ></Button>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const data = selectors.productSelector(state);
  // console.log(data);
  return { data: data.product };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleProduct: (productId) => dispatch(getSingleProduct(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostManagePage);
