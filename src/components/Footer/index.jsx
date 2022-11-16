import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from '../../assets/logo/Logo.png';

import styles from "./Footer.module.scss";

const FooterNavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
        <h3 className={styles.navCategory}>company</h3>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Premium</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Affiliate Program</a>
        </li>
        <li>
          <a href="/">Get Coupon</a>
        </li>
      </ul>

      <ul className={styles.navLinks}>
        <h3 className={styles.navCategory}>help and support</h3>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Knowledge Center</a>
        </li>
        <li>
          <a href="/">Premium Support</a>
        </li>
        <li>
          <a href="/">Sponsorships</a>
        </li>
      </ul>

      <ul className={styles.navLinks}>
        <h3 className={styles.navCategory}>learning</h3>
        <li>
          <a href="/">Learn Hub</a>
        </li>
        <li>
          <a href="/">Manuals</a>
        </li>
        <li>
          <a href="/">Tutorials</a>
        </li>
        <li>
          <a href="/">Communities</a>
        </li>
      </ul>

      <ul className={styles.navLinks}>
        <h3 className={styles.navCategory}>resources</h3>
        <li>
          <a href="/">Third-Party Tools</a>
        </li>
        <li>
          <a href="/">Illustrations</a>
        </li>
        <li>
          <a href="/">Themesberg</a>
        </li>
        <li>
          <a href="/">Bluehost</a>
        </li>
        <li>
          <a href="/">Stock Photos</a>
        </li>
      </ul>

      <ul className={styles.navLinks}>
        <h3 className={styles.navCategory}>legal</h3>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms & Conditions</a>
        </li>
        <li>
          <a href="/">EULA</a>
        </li>
      </ul>
    </nav>
  );
};

const LogoAndSocialLinks = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <p className={styles.copyright}>© 2022 Flowbite, Inc. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <a href="/"><i class="fa-brands fa-github"></i></a>
        <a href="/"><i class="fa-brands fa-twitter"></i></a>
        <a href="/"><i class="fa-solid fa-basketball"></i></a>
        <a href="/"><i class="fa-brands fa-facebook"></i></a>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <FooterNavBar />
          </Col>
        </Row>
        <Row>
            <Col>
                <LogoAndSocialLinks />
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
