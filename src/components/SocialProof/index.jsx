import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import serverIcon from "../../assets/icons/server.png";
import userIcon from "../../assets/icons/users.png";
import shoppingCartIcon from "../../assets/icons/shopping-cart.png";
import globeIcon from "../../assets/icons/globe.png";

import styles from "./SocialProof.module.scss";

const SocialProof = () => {
  return (
    <section className={styles.socialProofSection}>
      <Container>
        <Row className="justify-content-between">
          <Col xl={6}>
            <div className={styles.leftContentWrapper}>
              <div className={styles.title}>
                <h5>Trusted Worldwide</h5>
                <h1>Trusted by over 600 million users and 10,000 teams</h1>
                <p>
                  Our rigorous security and compliance standards are at the
                  heart of all we do. We work tirelessly to protect you and your
                  customers.
                </p>
              </div>
              <div className={styles.seperator}></div>
              <div className={styles.links}>
                <a href="/">Explore Legality Guide</a>
                <a href="/">Visit the Trust Center</a>
              </div>
            </div>
          </Col>
          <Col xl={5} className="d-flex flex-column gap-32">
            <Row>
              <Col>
                <div className={styles.rightContentWrapper}>
                  <img src={serverIcon} alt="server-icon" />
                  <h3>99.99% uptime</h3>
                  <p>for Flowbite, with zero maintenance downtime</p>
                </div>
              </Col>
              <Col>
                <div className={styles.rightContentWrapper}>
                  <img src={userIcon} alt="user-icon" />
                  <h3>600M+ Users</h3>
                  <p>trusted by over 600 milion users around the world</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.rightContentWrapper}>
                  <img src={shoppingCartIcon} alt="shopping-cart-icon" />
                  <h3>Millions</h3>
                  <p>of transactions per day</p>
                </div>
              </Col>
              <Col>
                <div className={styles.rightContentWrapper}>
                  <img src={globeIcon} alt="globe-icon" />
                  <h3>100+ countries</h3>
                  <p>have used Flowbite to create functional websites</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialProof;
