import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

import { Nav, Navbar, Dropdown, DropdownButton } from "react-bootstrap";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Navbar.Brand href="/">Pets-R-Us</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navOptions">
          <Link className="nav-link" to="/shop">
            Shop Now
          </Link>
          {user && user.name ? (
            <>
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-user">
                    Welcome: {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
                    <DropdownButton
                      id="dropdown-admin"
                      drop="end"
                      title="Admin"
                    >
                      <Dropdown.Item href="/add">Add Inventory</Dropdown.Item>
                    </DropdownButton>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </>
          ) : (
            <Link className="nav-link userNav" to="/auth">
              Sign In
            </Link>
          )}
          <Link className="nav-link cartLink" to="/cart">
            🛒
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
