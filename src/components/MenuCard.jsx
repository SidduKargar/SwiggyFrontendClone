import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function MenuCard({ item }) {
  const { addItem, removeItem, items } = useCart();
  const cartItem = items.find(i => i.id === item.id);

  return (
    <Card className="mb-3 border-0 shadow-sm hover-shadow">
      <div className="row g-0">
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>₹{item.price}</Card.Text>
            <Card.Text className="text-muted">
              {item.description}
            </Card.Text>
            <div className="d-flex align-items-center">
              {cartItem ? (
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => removeItem(item)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{cartItem.quantity}</span>
                  <Button 
                    variant="outline-success" 
                    size="sm"
                    onClick={() => addItem(item)}
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="success" 
                  size="sm"
                  onClick={() => addItem(item)}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <img
            src={item.image}
            className="w-100 h-100 object-fit-cover rounded-end"
            alt={item.name}
          />
        </div>
      </div>
    </Card>
  );
}

export default MenuCard;