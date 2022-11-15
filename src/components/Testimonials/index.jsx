import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import quotes from '../../assets/icons/quotes.png';
import avt from '../../assets/customers/Avatar.png';

import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <Container>
        <Row>
          <Col>
            <div className={styles.contentWrapper}>
              <img src={quotes} alt="quotes" />
              <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
              <div className={styles.customer}>
                <img src={avt} alt="avatar" />
                <h5>Micheal Gough </h5>
                <span>/</span>
                <span>CEO at Google</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
