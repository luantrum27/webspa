import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Navbar.module.scss';
import { Link } from 'react-router-dom';
// Icon Website
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const cx = classNames.bind(styles)

function NavbarTop() {
    return (
        <div className={cx('navbar__top')}>
            <ul className={cx('navbar__top--contact')}>
                <li className={cx('navbar__top--contactItem')} >
                    <PhoneInTalkIcon className={cx('navbar__top--contactIcon')} /> (+84) 379 124 695
                </li>
                <li className={cx('navbar__top--contactItem')} >
                    <EmailIcon className={cx('navbar__top--contactIcon')} /> spacecenter@gmail.com
                </li>
            </ul>
            <div className={cx('navbar__top--search')}>
                <input type='text' placeholder='Nhập từ khóa ...' className={cx('navbar__top--searchInput')} />
                <div className={cx('navbar__top--searchBtn')}>
                    <SearchIcon className={cx('navbar__top--searchIcon')} />
                </div>
            </div>
            <ul className={cx('navbar__top--media')}>
                <li className={cx('navbar__top--mediaItem')}>
                    <FacebookIcon className={cx('navbar__top--mediaIcon')} />
                </li>
                <li className={cx('navbar__top--mediaItem')}>
                    <InstagramIcon className={cx('navbar__top--mediaIcon')} />
                </li>
                <li className={cx('navbar__top--mediaItem')}>
                    <TwitterIcon className={cx('navbar__top--mediaIcon')} />
                </li>
                <li className={cx('navbar__top--mediaItem')}>
                    <YouTubeIcon className={cx('navbar__top--mediaIcon')} />
                </li>
            </ul>
        </div>
    )
}

export default NavbarTop