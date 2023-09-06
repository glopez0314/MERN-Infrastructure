import { Link, useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";

import { Nav, Navbar, Dropdown } from "react-bootstrap";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate("/");
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
                    {user.name === "admin" ? (
                      <Dropdown.Item href="/add">Add Inventory</Dropdown.Item>
                    ) : null}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Link className="nav-link cartLink" to="/cart">
                🛒
              </Link>
            </>
          ) : (
            <Link className="nav-link userNav" to="/auth">
              Sign In
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
