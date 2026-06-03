import Navbar from "./Navbar";
import Product from "./Product";
import "./Navbar.css";
import "./App.css";


function App() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro",
      price: "₹1,29,900",
      image:
        "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      price: "₹29,990",
      image:
        "https://m.media-amazon.com/images/I/61vJtKbAssL._SL1500_.jpg",
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      price: "₹41,900",
      image:
        "https://m.media-amazon.com/images/I/71LfnkRgZ4L._SL1500_.jpg",
    },
    {
      id: 4,
      name: "Canon EOS R50",
      price: "₹72,990",
      image:
       "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    },
    {
      id: 5,
      name: "Samsung 55-inch 4K TV",
      price: "₹54,999",
      image:
         "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    },
    {
      id: 6,
      name: "ASUS Gaming Laptop",
      price: "₹89,999",
      image:
        "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          amazon<span>.in</span>
        </div>

        <div className="location">
          <small>Deliver to</small>
          <strong>India</strong>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="Search Amazon" />
          <button>🔍</button>
        </div>

        <div className="navItem">
          <small>Hello, Sign In</small>
          <strong>Account & Lists</strong>
        </div>

        <div className="navItem">
          <small>Returns</small>
          <strong>& Orders</strong>
        </div>

        <div className="cart">🛒 Cart</div>
      </nav>

      {/* Sub Navbar */}
      <div className="subnav">
        <p>☰ All</p>
        <p>Today's Deals</p>
        <p>Mobiles</p>
        <p>Electronics</p>
        <p>Fashion</p>
        <p>Prime</p>
        <p>Home</p>
        <p>Customer Service</p>
      </div>

      {/* Hero Section */}
      <div className="hero"></div>

      {/* Categories */}
      <div className="categoryRow">
        <div className="category">
          <h2>Electronics</h2>
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700"
            alt=""
          />
        </div>

        <div className="category">
          <h2>Fashion</h2>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
            alt=""
          />
        </div>

        <div className="category">
          <h2>Gaming</h2>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700"
            alt=""
          />
        </div>

        <div className="category">
          <h2>Home Essentials</h2>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700"
            alt=""
          />
        </div>
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>

            <img src={item.image} alt={item.name} />

            <h2>{item.price}</h2>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <button className="topBtn">Back to top</button>

        <div className="footerContent">
          <h3>Amazon Clone</h3>
          <p>Built using React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;