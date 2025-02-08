import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { restaurants } from '../data/restaurants';
import MenuCard from '../components/MenuCard';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

function RestaurantDetail() {
  const { id } = useParams();
  const { items } = useCart();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">{restaurant.name}</h2>
                <Badge bg="success">★ {restaurant.rating}</Badge>
              </div>
              <p className="text-muted mb-2">{restaurant.cuisine.join(', ')}</p>
              <p className="mb-0">Delivery time: {restaurant.deliveryTime} mins</p>
            </Card.Body>
          </Card>

          <h4 className="mb-3">Menu</h4>
          {restaurant.menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </Col>
        <Col md={4} className="position-relative">
          <div 
            style={{ 
              position: 'sticky', 
              top: '90px',
              height: 'calc(100vh - 110px)',
              overflowY: 'auto'
            }}
          >
            <Cart />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantDetail;