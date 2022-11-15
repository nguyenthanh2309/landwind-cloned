import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.scss";
import content from "../../assets/contents/marketing-strategy-1.png";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Container className="custom-container">
        <Row>
          <Col xl={7}>
            <div className={styles.leftContentWrapper}>
              <h1>
                Building digital<br />product & brands
              </h1>
              <p>
                Here at flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
              <div className={styles.btnWrapper}>
                <a href="/">Start 30 day free trial</a>
                <a href="/">Pricing & FAQ</a>
              </div>
            </div>
          </Col>
          <Col xl={5}>
            <div className={styles.rightContentWrapper}>
              <img src={content} alt="marketing-strategy-1" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
