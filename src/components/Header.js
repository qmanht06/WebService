import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css'
import { UilSearch } from '@iconscout/react-unicons'
import { UilShoppingCartAlt } from '@iconscout/react-unicons'

const Header = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img className={styles.logoImg} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
                </Link>
            </div>
            <div className={styles.search}>
                <input type="text" className={styles.searchInput} />
                <div className={styles.searchIcon}>
                    <UilSearch size="24" color="#000" />
                </div>
            </div>
            
            <div className={styles.userNav}>
                <Link to='/user/profile' className={styles.headerNav}>
                    <span className={styles.headerNavTextFirst}>Hello,</span>
                    <span className={styles.headerNavTextSecond}>User Name</span>
                </Link>
                <ul className={styles.userSubNav}>
                    <Link to='/user/profile' className={styles.headerUserSubnav}>Manage Acount</Link>
                    <Link to='/user/order' className={styles.headerUserSubnav}>Your order</Link>
                    <Link to='/user/changepassword' className={styles.headerUserSubnav}>Change password</Link>
                    <button className={styles.headerUserSubnav} style={{ textAlign: 'left' }}>Log out</button>
                </ul>
            </div>
            <Link to='/user/order' className={styles.headerNav}>
                <span className={styles.headerNavTextFirst}>Returns</span>
                <span className={styles.headerNavTextSecond}>&amp; Order</span>
            </Link>
            <Link to='/cart' className={styles.headerNav} style={{ flexDirection: 'row' }}>
                <div style={{ position: "relative" }}>
                    <span className={styles.quantity}>10</span>
                    <UilShoppingCartAlt size="30" color="#fff" />
                </div>
                <span className={styles.cartText}>Cart</span>
            </Link>
        </header>


    );
}

export default Header;
