import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiPercent } from 'react-icons/fi';

function Offers() {
  const offers = [
    {
      id: 1,
      title: "50% OFF up to ₹100",
      code: "WELCOME50",
      description: "Valid on your first order",
      terms: "Minimum order value ₹200"
    },
    {
      id: 2,
      title: "20% OFF up to ₹150",
      code: "WEEKDAY20",
      description: "Valid on weekdays",
      terms: "Minimum order value ₹400"
    },
    {
      id: 3,
      title: "Free Delivery",
      code: "FREEDEL",
      description: "No delivery charge",
      terms: "Valid on orders above ₹300"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">
        <FiPercent className="me-2" />
        Available Offers
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {offers.map((offer) => (
          <Col key={offer.id}>
            <Card className="h-100 border-0 shadow-sm hover-shadow">
              <Card.Body>
                <Card.Title className="text-success">{offer.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Use code: {offer.code}
                </Card.Subtitle>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="text-muted small">
                  {offer.terms}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Offers;