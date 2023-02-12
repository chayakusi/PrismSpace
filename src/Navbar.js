import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
  <Link to="/" style={{ textDecoration: "none" }}>
  <h4 style={{color:"white"}}>PrismSpace</h4>
    </Link>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <Link to="/articles" style={{ textDecoration: "none",}}>
          <li className="nav-links">Feed</li>
        </Link>
        <Link to="/consultation" style={{ textDecoration: "none" }}>
          <li className="nav-links">Consultation</li>
        </Link>
        <Link to="/resources" style={{ textDecoration: "none" }}>
          <li className="nav-links">Legal Resources</li>
        </Link>
        <Link to="/events" style={{ textDecoration: "none" }}>
          <li className="nav-links">Events</li>
        </Link>
        <Link to="/community" style={{ textDecoration: "none" }}>
          <li className="nav-links">Community</li>
        </Link>
        <Link to="/safespaces" style={{ textDecoration: "none" }}>
          <li className="nav-links">Safespaces</li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
