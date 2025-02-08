import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

function NavigationBar() {
  const { items } = useCart();
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
            alt="Swiggy Logo"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/help">Help</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative me-2">
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <Badge 
                  bg="success" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
            <Button 
              variant="outline-dark" 
              className="ms-2" 
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;