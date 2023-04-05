import Netflix from "../assets/netflix_logo.png";
import Logo from "./Logo";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active fw-bold" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/tv-shows" ? "active fw-bold" : ""
              }`}
              to="/tv-shows"
            >
              TV Shows
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/movie-details" ? "active fw-bold" : ""
              }`}
              to="/movie-details"
            >
              Movie
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
