import { Container, Row, Col } from "react-bootstrap";

import HeroImage from "../../assets/img/Hero.png";

import { useNavigate } from "react-router-dom";

const HeroComponent = ({ tampilKonten = true }) => {
  let navigate = useNavigate();
  return (
    <div className="hero-section">
      <Container fluid>
        <Row className="d-flex align-items-center ps-5">
          <Col md="6">
            {tampilKonten && (
              <>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>

                <button
                  className="btn btn-success"
                  onClick={() => navigate("/search")}
                >
                  Mulai Sewa Mobil
                </button>
              </>
            )}
          </Col>

          <Col md="6">
            {tampilKonten && (
              <img src={HeroImage} alt="hero-img" className="w-100" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComponent;
