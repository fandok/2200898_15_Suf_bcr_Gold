import "./SearchBarComponent.css";

import { Container, Row, Col, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

const SearchBarComponent = () => {
  return (
    <Container className="cari-mobil">
      <Row>
        <Col>
          <p>Nama Mobil</p>
          <input type="text" placeholder="Ketik nama/tipe mobil" />
        </Col>
        <Col>
          <p>Kategori</p>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option selected disabled>
              Masukan Kapasitas Mobil
            </option>
            <option value="small">2-4 orang</option>
            <option value="medium">4-6 orang</option>
            <option value="large">6-8 orang</option>
          </Form.Select>
        </Col>
        <Col>
          <p>Harga</p>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option selected disabled>
              Masukan Harga Sewa per Hari
            </option>
            <option value="100000">Rp 100.000</option>
            <option value="150000">Rp 150.000</option>
            <option value="200000">Rp 200.000</option>
          </Form.Select>
        </Col>
        <Col>
          <p>Status</p>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option selected disabled>
              Disewa
            </option>
            <option value="true">Disewa</option>
            <option value="false">Tersedia</option>
          </Form.Select>
        </Col>
        <Col>
          <Link to="./hasil-pencarian">
            <button className="btn btn-success button-search">
              Cari Mobil
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBarComponent;
