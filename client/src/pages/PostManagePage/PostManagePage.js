import Headers from "../../components/Header/Header";
import classNames from "classnames/bind";
import style from "./PostManagePage.module.scss"

const cx = classNames.bind(style)


function PostManagePage() {
  return (
    <>
      {/* <Headers></Headers> */}
      <div className={cx("grid", "body")}>
        <h4 className={cx("body__title")}>Thêm sản phẩm</h4>
        <div className={cx("body__item")}>
          <p className={cx("body__item__title")}>Tên sản phẩm: </p>
          <input
            className={cx("body__item__input")}
            type="text"
            placeholder="Tên sản phẩm"
          />
        </div>
        <div className={cx("body__item")}>
          <p className={cx("body__item__title")}>Hình ảnh: </p>
          <input
            className={cx("body__item__input")}
            type="text"
            placeholder="Hình ảnh"
          />
        </div>
        <div className={cx("body__item")}>
          <p className={cx("body__item__title")}>Mô tả: </p>
          <textarea
            className={cx("body__item__text-area")}
            id=""
            cols="100"
            rows="10"
            placeholder="Mô tả sản phẩm"
          ></textarea>
        </div>
        <div className={cx("body__item")}>
          <p className={cx("body__item__title")}>Giá tiền: </p>
          <input
            className={cx("body__item__input")}
            type="text"
            placeholder="Giá tiền"
          />
          <p className={cx("body__item__DVT")}>VND</p>
        </div>
        <div className={cx("body__item")}>
          <p className={cx("body__item__title")}>Danh mục sản phẩm: </p>
          <select className={cx("body__item__select")} id="">
            <option value="">--Thêm lựa chọn--</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default PostManagePage;
