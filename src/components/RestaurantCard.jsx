import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="text-decoration-none">
      <Card className="h-100 border-0 shadow-sm hover-shadow">
        <Card.Img 
          variant="top" 
          src={restaurant.image} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text className="text-muted">
            {restaurant.cuisine.join(', ')}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-success">
              ★ {restaurant.rating}
            </span>
            <span className="text-muted">
              {restaurant.deliveryTime} mins
            </span>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestaurantCard;