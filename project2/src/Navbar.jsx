import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">amazon</h2>

      <input
        type="text"
        placeholder="Search Amazon"
        className="search"
      />

      <div className="cart">
        🛒 Cart
      </div>
    </nav>
  );
}

export default Navbar;