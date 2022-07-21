import classNames from "classnames/bind";
import style from "./PageManage.module.scss"
import Button from "../common/Button/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(style)

function PageManage({ types }) {
    let headerComponent = <>
        <h4 className={cx('header')}>Quản lý người dùng</h4>
        <Button size='big' status='primary' title='Thêm người dùng'></Button>
    </>
    let tableTitle = <tr className={cx('item')}>
        <th className={cx('title__contents')}>#</th>
        <th className={cx('title__contents')}>Email</th>
        <th className={cx('title__contents')}>Phân quyền</th>
        <th className={cx('title__contents')}>Username</th>
        <th className={cx('title__contents')}>Fullname</th>
        <th className={cx('title__contents')}>Thêm</th>
    </tr>
    if (types === 'product') {
        headerComponent = <>
            <h4 className={cx('header')}>Quản lý bài viết</h4>
            <Link to="/product/create"><Button size='big' status='primary' title='Thêm bài viết'></Button></Link>

        </>
        tableTitle = <tr className={cx('item')}>
            <th className={cx('title__contents')}>#</th>
            <th className={cx('title__contents')}>Tên bài viết</th>
            <th className={cx('title__contents')}>Chủ đề</th>
            <th className={cx('title__contents')}>Tên tác giả</th>
            <th className={cx('title__contents')}>Ngày xuất bản</th>
            <th className={cx('title__contents')}>Thêm</th>
        </tr>
    }
    return (
        <div className={cx('grid', 'post-manage')}>
            <div className={cx('wrapper', 'post-manage__header')}>
                {headerComponent}
            </div>
            <table className={cx('wrapper')}>
                <thead className={cx('table__title')}>
                    {tableTitle}
                </thead>
                <tbody className={cx('table__item')}>
                    <tr className={cx('item')}>
                        <td className={cx('title__contents')}>#</td>
                        <td className={cx('title__contents')}>Tên bài viết tdhair thaatj laf daif ddeer cos theer test dduwocj heets toanf booj caaus trucs</td>
                        <td className={cx('title__contents')}>Chủ đềt</td>
                        <td className={cx('title__contents')}>Tên tác giảtdhair thaatj laf daif ddeer cos theer test dduwocj heets toanf booj caaus trucs</td>
                        <td className={cx('title__contents')}>Ngày xuất bảntdhair thaatj laf daif ddeer cos theer test dduwocj heets toanf booj caaus trucs</td>
                        <td className={cx('title__contents')}>Thêm</td>
                    </tr>
                    <tr className={cx('item')}>
                        <td className={cx('title__contents')}>#</td>
                        <td className={cx('title__contents')}>Tên bài viết tdhair thaatj laf daif ddeer cos theer test dduwocj heets toanf booj caaus trucs</td>
                        <td className={cx('title__contents')}>Chủ đềt</td>
                        <td className={cx('title__contents')}>Tên tác giảtdhair thaatj laf daif ddeer cos theer test dduwocj heets toanf booj caaus trucs</td>
                        <td className={cx('title__contents')}>Ngày xuất bảntdhair thaatj laf daif ddeer cos theer test dduwocj heets toanf booj caaus trucs</td>
                        <td className={cx('title__contents')}>Thêm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PageManage;