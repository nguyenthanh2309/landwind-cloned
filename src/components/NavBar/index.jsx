import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './NavBar.module.scss'
import logo from "../../assets/logo/Logo.png";

const NavBar = () => {
  return (
    <Container className="custom-container">
      <Row className="align-items-center">
        <Col xl={2}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Col>
        <Col xl={8}>
          <nav className={styles.navBar}>
            <a href="/">Company</a>
            <a href="/">Marketplace</a>
            <a href="/">Features</a>
            <a href="/">Teams</a>
            <a href="/">Contact</a>
          </nav>
        </Col>
        <Col xl={2}>
          <div className={styles.btnWrapper}>
            <a href="/">Log in</a>
            <a href="/">Get started</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
