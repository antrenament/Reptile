import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function FooterDark() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col sm={4} className="text-center text-sm-start mb-3 mb-sm-0">
            <small>Connect with us:</small>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
              </a>
              <a href="https://www.twitter.com/">
                <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
              </a>
            </div>
          </Col>
          <Col sm={4} className="text-center mb-3 mb-sm-0">
            <small>Address:</small>
            <div>
              <p>123 Main St.</p>
              <p>Anytown, USA 12345</p>
            </div>
          </Col>
          <Col sm={4} className="text-center text-sm-end">
            <small>&copy; {new Date().getFullYear()} My Company. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterDark;