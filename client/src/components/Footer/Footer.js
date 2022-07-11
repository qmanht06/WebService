import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.h1}>Amazon: Expect more. Pay less.</h1>
      <div className={styles.Container}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.Heading}>About Us</div>
            <a className={styles.FooterLink} href="#">
              Aim
            </a>
            <a className={styles.FooterLink} href="#">
              Vision
            </a>
            <a className={styles.FooterLink} href="#">
              Testimonials
            </a>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Services</div>
            <a className={styles.FooterLink} href="#">
              Internships
            </a>
            <a className={styles.FooterLink} href="#">
              Become an Affiliate
            </a>
            <a className={styles.FooterLink} href="#">
              Currency Converter
            </a>
            <a className={styles.FooterLink} href="#">
              Assistant
            </a>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Contact Us</div>
            <a
              className={styles.FooterLink}
              href="https://www.facebook.com/profile.php?id=100011684883483"
            >
              Le Minh Hoang
            </a>
            <a className={styles.FooterLink} href="#">
              Nguyen Tung Lam
            </a>
            <a className={styles.FooterLink} href="#">
              Trieu Quang Manh
            </a>
            <a className={styles.FooterLink} href="#">
              Pham Tran Minh Hieu
            </a>
          </div>
          <div className={styles.Column}>
            <div className={styles.Heading}>Social Media</div>
            <a
              className={styles.FooterLink}
              href="https://www.facebook.com/profile.php?id=100011684883483"
            >
              Facebook
            </a>
            <a className={styles.FooterLink} href="#">
              Twitter
            </a>
            <a className={styles.FooterLink} href="#">
              Youtube
            </a>
            <a className={styles.FooterLink} href="#">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
