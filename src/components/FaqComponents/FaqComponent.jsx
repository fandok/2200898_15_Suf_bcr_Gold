import { Container, Row, Col, Form } from "react-bootstrap";

const FaqComponent = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="col-5 faq-section">
            <h3 className="fw-bold">Frequently Asked Question</h3>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
          <Col className="col-7 faq-select">
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Apa saja syarat yang dibutuhkan?</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Berapa hari minimal sewa mobil lepas kunci?</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </option>
            </Form.Select>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Apakah Ada biaya antar-jemput?</option>
            </Form.Select>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Bagaimana jika terjadi kecelakaan</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
