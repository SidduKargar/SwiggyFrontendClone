import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/restaurants';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRestaurants = restaurants.filter(restaurant => {
    const searchLower = searchTerm.toLowerCase();
    return (
      restaurant.name.toLowerCase().includes(searchLower) ||
      restaurant.cuisine.some(c => c.toLowerCase().includes(searchLower)) ||
      restaurant.menu.some(item => 
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="mb-3">Hungry? We've got you covered</h1>
        <div className="d-flex justify-content-center">
          <div style={{ maxWidth: '500px', width: '100%' }}>
            <InputGroup size="lg">
              <InputGroup.Text>
                <FiSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for restaurants, cuisine, or dishes"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </div>
        </div>
      </div>

      {searchTerm && (
        <p className="text-muted mb-4">
          Found {filteredRestaurants.length} results for "{searchTerm}"
        </p>
      )}

      <h2 className="mb-4">Popular Restaurants</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredRestaurants.map((restaurant) => (
          <Col key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;