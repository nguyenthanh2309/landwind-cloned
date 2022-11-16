import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <section className={styles.CTASection}>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className={styles.contentWrapper}>
              <h1>Start your free trial today</h1>
              <p>Try Flowbite Platform for 30 days. No credit card required.</p>
              <a href="/" className={styles.btnWrapper}>
                Free trial for 30 days
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
