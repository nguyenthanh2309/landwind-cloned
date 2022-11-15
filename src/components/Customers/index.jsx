import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import googleCustomer from "../../assets/customers/Google.png";
import microsoftCustomer from "../../assets/customers/Microsoft.png";
import spotifyCustomer from "../../assets/customers/Spotify.png";
import mailchimpCustomer from "../../assets/customers/Mailchimp.png";
import airbnbCustomer from "../../assets/customers/Airbnb.png";
import uberCustomer from "../../assets/customers/uber.png";

import styles from './Customers.module.scss'


const Customers = () => {
  return (
    <section className={styles.customersSection}>
      <Container className="custom-container">
        <Row>
          <Col>
            <div className={styles.logoContainer}>
              <img src={googleCustomer} alt="customer-logo" />
              <img src={microsoftCustomer} alt="customer-logo" />
              <img src={spotifyCustomer} alt="customer-logo" />
              <img src={mailchimpCustomer} alt="customer-logo" />
              <img src={airbnbCustomer} alt="customer-logo" />
              <img src={uberCustomer} alt="customer-logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Customers;
