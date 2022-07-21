import Headers from "../../components/Header/Header";
import classNames from "classnames/bind";
import style from "./PostManagePage.module.scss"
import Button from "../../components/common/Button/Button"

const cx = classNames.bind(style)


function PostManagePage() {
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
              name="productCategory"
              id="productCategory"
            />
          </div>
          <Button size='big' status='primary' title='Cập nhật bài viết'></Button>
        </form>
      </div>
    </>
  );
}

export default PostManagePage;
