import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Navbar.Brand href="/">Pets-R-Us</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/shop">
              Shop Now
            </Link>
          {user && user.name ? (
            <>
              <Link className="nav-link userNav" to="/orders">
                Welcome: {user.name}
              </Link>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Admin
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/add">Add Inventory</Link>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <Link className="nav-link userNav" onClick={handleLogOut}>LogOut</Link>
            </>
            ) : (
              <Link className="nav-link userNav" to="/orders">
              Sign In
              </Link>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;