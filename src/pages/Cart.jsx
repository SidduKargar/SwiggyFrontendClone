import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingBag, FiArrowLeft } from 'react-icons/fi';

function Cart() {
  const { items, addItem, removeItem, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <FiShoppingBag size={50} className="text-muted mb-4" />
          <h3>Your cart is empty</h3>
          <p className="text-muted mb-4">You haven't added any items to your cart yet</p>
          <Link to="/">
            <Button variant="success" size="lg">
              <FiArrowLeft className="me-2" />
              Browse Restaurants
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Cart</h2>
      <Row>
        <Col md={8}>
          <Card className="border-0 shadow-sm mb-4">
            <ListGroup variant="flush">
              {items.map((item) => (
                <ListGroup.Item key={item.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="text-muted mb-0">₹{item.price}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => removeItem(item)}
                      >
                        -
                      </Button>
                      <span className="mx-3">{item.quantity}</span>
                      <Button 
                        variant="outline-success" 
                        size="sm"
                        onClick={() => addItem(item)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Items Total</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Platform Fee</span>
                <span>₹10</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>To Pay</strong>
                <strong>₹{cartTotal + 50}</strong>
              </div>
              <Button variant="success" size="lg" className="w-100 mb-3">
                Proceed to Pay
              </Button>
              <Button 
                variant="outline-danger" 
                className="w-100"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;