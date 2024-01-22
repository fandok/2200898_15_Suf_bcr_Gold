import "./OurServiceComponent.css";

import { Container, Row, Col } from "react-bootstrap";

import Girl from "../../assets/img/girl.jpg";

const OurServices = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6">
            <img src={Girl} alt="" />
          </Col>
          <Col lg="6">
            <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jami nan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="section-list">
              <i className="fa-solid fa-check"></i>
              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="section-list">
              <i className="fa-solid fa-check"></i>
              <p>Sewa Mobil Lepas Kunci di Bali 12 Jam</p>
            </div>
            <div className="section-list">
              <i className="fa-solid fa-check"></i>
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="section-list">
              <i className="fa-solid fa-check"></i>
              <p>Gratis Antar Jemput Mobil di Bandara</p>
            </div>
            <div className="section-list">
              <i className="fa-solid fa-check"></i>
              <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
