import "./SewaMobilComponent.css";

import { Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const SewaMobilSekarang = () => {
  let navigate = useNavigate();
  return (
    <div className="mt-5">
      <Container className="sewa-section fw-bold rounded">
        <Row>
          <Col className="text-center">
            <h2 className="fw-bold mb-4">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              placeat exercitationem dicta sit mollitia impedit.
            </p>
            <button
              className="btn btn-success"
              onClick={() => navigate("/search")}
            >
              Mulai Sewa Mobil
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SewaMobilSekarang;
