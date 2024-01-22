import "./WhyUsComponent.css";

import { Container, Col, Card } from "react-bootstrap";

const WhyUs = () => {
  return (
    <div className="mt-5">
      <Container>
        <Col>
          <h3>Why Us</h3>
          <p>Mengapa harus pilih Binar Car Rent?</p>
        </Col>
        <Col>
          <div className="d-flex gap-3 why-us-card">
            <Card className="col-md-3">
              <Card.Body>
                <i className="why-us-icon fa-solid fa-thumbs-up"></i>
                <Card.Title>Mobil Lengkap</Card.Title>
                <Card.Text>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-md-3">
              <Card.Body>
                <i className="why-us-icon fa-solid fa-tag"></i>
                <Card.Title>Harga Murah</Card.Title>
                <Card.Text>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-md-3">
              <Card.Body>
                <i className="why-us-icon far fa-clock"></i>
                <Card.Title>Layanan 24 Jam</Card.Title>
                <Card.Text>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-md-3">
              <Card.Body>
                <i className="why-us-icon fa-solid fa-award"></i>
                <Card.Title>Sopir Profesional</Card.Title>
                <Card.Text>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default WhyUs;
