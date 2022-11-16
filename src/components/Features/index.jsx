import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import firstContent from "../../assets/features/features-1 1.png";
import secondContent from '../../assets/features/feature-2 1.png';

import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <Container className="custom-container">
        <Row className="m-80">
          <Col xl={6}>
            <div className={styles.contentWrapper}>
              <div className={styles.titleWrapper}>
                <h1>Work with tools you already use</h1>
                <p>
                  Deliver great service experiences fast - without the
                  complexity of traditional ITSM solutions.Accelerate critical
                  development work, eliminate toil, and deploy changes with
                  ease.
                </p>
              </div>

              <div className={styles.featuresWrapper}>
                <ul className={styles.featuresList}>
                  <li>Continuous integration and deployment</li>
                  <li>Development workflow</li>
                  <li>Knowledge management</li>
                </ul>
                <p>
                  Deliver great service experiences fast - without the
                  complexity of traditional ITSM solutions.
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className={styles.rightImageContentWrapper}>
              <img src={firstContent} alt="right-content" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <div className={styles.leftImageContentWrapper}>
              <img src={secondContent} alt="left-content" />
            </div>
          </Col>
          <Col xl={6}>
            <div className={styles.contentWrapper}>
              <div className={styles.titleWrapper}>
                <h1>We invest in the world’s potential</h1>
                <p>
                  Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
                </p>
              </div>

              <div className={styles.featuresWrapper}>
                <ul className={styles.featuresList}>
                  <li>Dynamic reports and dashboards</li>
                  <li>Templates for everyone</li>
                  <li>Development workflow</li>
                  <li>Limitless business automation</li>
                  <li>Knowledge management</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
