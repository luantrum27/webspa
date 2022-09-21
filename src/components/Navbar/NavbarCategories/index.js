import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Navbar.module.scss'
import { Logo } from '../../../assets/img';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const cx = classNames.bind(styles);
function NavbarCategories() {
    return (
        <ul className={cx('navbar__bottom--categories')}>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/'>
                    Trang chủ
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/introduce'>
                    Giới thiệu
                    <KeyboardArrowDownIcon />
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/service'>
                    Dịch vụ
                    <KeyboardArrowDownIcon />
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/news'>
                    Tin tức
                    <KeyboardArrowDownIcon />
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/contact'>
                    Nhận xét
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/contact'>
                    Liên hệ
                </Link>
            </li>
        </ul>
    )
}

export default NavbarCategories
