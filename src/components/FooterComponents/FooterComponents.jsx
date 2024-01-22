import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./FooterComponent.css";

const FooterComonents = () => {
  return (
    <div className="footer mt-5">
      <Container>
        <Row>
          <Col lg="4" className="fw-bold">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <Link to="">Our Services</Link>
            <Link to="whyus">Why Us</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
          </Col>
          <Col lg="2" className="mt-lg-0 mt-5">
            <p className="fw-bold mb-3">Connect with us</p>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-brands fa-twitch"></i>
            </div>
          </Col>
          <Col lg="2">
            <p className="fw-bold mb-3">Copyright Binar 2024</p>
            <div className="footer-brand"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComonents;
