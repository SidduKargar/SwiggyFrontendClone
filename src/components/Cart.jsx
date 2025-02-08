import { Card, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { items, addItem, removeItem, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Card className="shadow-sm">
        <Card.Body className="text-center py-5">
          <h5 className="mb-3">Your cart is empty</h5>
          <p className="text-muted">Add items to get started</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Cart</h5>
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          {items.map((item) => (
            <ListGroup.Item key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">{item.name}</h6>
                  <small className="text-muted">₹{item.price}</small>
                </div>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => removeItem(item)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
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
      </Card.Body>
      <Card.Footer className="bg-white">
        <div className="d-flex justify-content-between mb-2">
          <span>Total Amount</span>
          <strong>₹{cartTotal}</strong>
        </div>
        <Link to="/cart">
          <Button variant="success" className="w-100">
            Proceed to Checkout
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default Cart;