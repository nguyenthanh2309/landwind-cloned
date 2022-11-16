import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import styles from "./FAQ.module.scss";
import "./accordionCustom.scss";

const FAQ = () => {
  return (
    <section className={styles.FAQSection}>
      <Container className="custom-container">
        <Row>
          <Col>
            <div className={styles.title}>
              <h1>Frequently asked questions</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Can I use FlowBite in open-source projects?
                </Accordion.Header>
                <Accordion.Body>
                  Generally, it is accepted to use FlowBite in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to FlowBite itself. <br />
                  <br />
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                  <br />
                  <br />
                  Find out more information by{" "}
                  <span style={{ color: "#7e3af2" }}>reading the license.</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Where can I access my download files?
                </Accordion.Header>
                <Accordion.Body>
                  Generally, it is accepted to use FlowBite in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to FlowBite itself. <br />
                  <br />
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                  <br />
                  <br />
                  Find out more information by{" "}
                  <span style={{ color: "#7e3af2" }}>reading the license.</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I use FlowBite for commercial purposes?
                </Accordion.Header>
                <Accordion.Body>
                  Generally, it is accepted to use FlowBite in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to FlowBite itself. <br />
                  <br />
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                  <br />
                  <br />
                  Find out more information by{" "}
                  <span style={{ color: "#7e3af2" }}>reading the license.</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What about browser support?</Accordion.Header>
                <Accordion.Body>
                  Generally, it is accepted to use FlowBite in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to FlowBite itself. <br />
                  <br />
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                  <br />
                  <br />
                  Find out more information by{" "}
                  <span style={{ color: "#7e3af2" }}>reading the license.</span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
