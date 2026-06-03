import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    fontFamily: "Open Sans, sans-serif",
    backgroundColor: "#000",
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    gap: "20px"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}
export default NavBar; 