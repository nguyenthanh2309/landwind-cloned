import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import checkIcon from "../../assets/icons/check.png";

import styles from "./Pricing.module.scss";

const PricingCard = ({ plan, desc, price, infos }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h1>{plan}</h1>
        <h3>{desc}</h3>
      </div>
      <p className={styles.cardPrice}>
        <span>{price}</span> /month
      </p>
      <ul className={styles.permissions}>
        <li>
          <img src={checkIcon} alt="check-icon" />
          Invidual configuration
        </li>
        <li>
          <img src={checkIcon} alt="check-icon" />
          No setup, money, or hidden fees
        </li>
        <li>
          <img src={checkIcon} alt="check-icon" />
          Invidual configuration
        </li>
        <li>
          <img src={checkIcon} alt="check-icon" />
          Team size: <span>{infos.teamSize} developers</span>
        </li>
        <li>
          <img src={checkIcon} alt="check-icon" />
          Premium support: <span>{infos.premiumMonths} months</span>
        </li>
        <li>
          <img src={checkIcon} alt="check-icon" />
          Free updates: <span>{infos.updateMonths} months</span>
        </li>
      </ul>
        <a href="/" className={styles.btnWrapper}>Get started</a>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <Container>
        <Row>
          <Col>
            <div className={styles.title}>
              <h1>Pay as you grow</h1>
              <p>
                Here at flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PricingCard
              plan="Starter"
              desc="Great for personal use and for your side projects."
              price="$49"
              infos={{
                teamSize: 1,
                premiumMonths: 6,
                updateMonths: 6,
              }}
            />
          </Col>
          <Col>
            <PricingCard
              plan="Company"
              desc="Best for large scale uses and extended redistribution rights."
              price="$99"
              infos={{
                teamSize: 10,
                premiumMonths: 24,
                updateMonths: 24,
              }}
            />
          </Col>
          <Col>
            <PricingCard
              plan="Enterprise"
              desc="Best for large scale uses and extended redistribution rights."
              price="$499"
              infos={{
                teamSize: "100+",
                premiumMonths: 36,
                updateMonths: 36,
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
