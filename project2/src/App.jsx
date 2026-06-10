import { useState } from "react";
import "./Navbar.css";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      category: "Electronics",
      name: "Apple iPhone 15 Pro",
      price: "₹1,29,900",
      image:
        "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg",
    },
    {
      id: 2,
      category: "Electronics",
      name: "Sony WH-1000XM5",
      price: "₹29,990",
      image:
        "https://m.media-amazon.com/images/I/61vJtKbAssL._SL1500_.jpg",
    },
    {
      id: 3,
      category: "Electronics",
      name: "Apple Watch Series 9",
      price: "₹41,900",
      image:
        "https://m.media-amazon.com/images/I/71LfnkRgZ4L._SL1500_.jpg",
    },
    {
      id: 4,
      category: "Electronics",
      name: "Canon EOS R50",
      price: "₹72,990",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    },
    {
      id: 5,
      category: "Electronics",
      name: "Samsung 55-inch 4K TV",
      price: "₹54,999",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    },
    {
      id: 6,
      category: "Electronics",
      name: "ASUS Gaming Laptop",
      price: "₹89,999",
      image:
        "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    },
    {
  id: 7,
  category: "Fashion",
  name: "Nike Air Max Sneakers",
  price: "₹6,999",
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
},
{
  id: 8,
  category: "Fashion",
  name: "Levi's Men's Denim Jacket",
  price: "₹3,499",
  image:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
},
{
  id: 9,
  category: "Fashion",
  name: "Ray-Ban Sunglasses",
  price: "₹5,999",
  image:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
},
{
  id: 10,
  category: "Gaming",
  name: "PlayStation 5 Console",
  price: "₹54,990",
  image:
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800",
},
{
  id: 11,
  category: "Gaming",
  name: "Xbox Wireless Controller",
  price: "₹5,490",
  image:
    "https://images.unsplash.com/photo-1592840062661-55f7fdbbcf0f?w=800",
},
{
  id: 12,
  category: "Gaming",
  name: "Mechanical RGB Gaming Keyboard",
  price: "₹2,999",
  image:
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
},
{
  id: 13,
  category: "Home",
  name: "Modern Table Lamp",
  price: "₹1,499",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
},
{
  id: 14,
  category: "Home",
  name: "Luxury Sofa Set",
  price: "₹24,999",
  image:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
},
{
  id: 15,
  category: "Home",
  name: "Indoor Decorative Plant",
  price: "₹799",
  image:
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800",
},
{
  id: 16,
  category: "Home",
  name: "Wooden Study Desk",
  price: "₹7,999",
  image:
    "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800",
}
  ];

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

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
          <input
            type="text"
            placeholder="Search Amazon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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

        <div
          className="cart"
          onClick={() => setShowCart(true)}
        >
          🛒 Cart ({cart.length})
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className="subnav">
        <p onClick={() => setSelectedCategory("All")}>
          All
        </p>

        <p onClick={() => setSelectedCategory("Electronics")}>
          Electronics
        </p>

        <p onClick={() => setSelectedCategory("Fashion")}>
          Fashion
        </p>

        <p onClick={() => setSelectedCategory("Gaming")}>
          Gaming
        </p>

        <p onClick={() => setSelectedCategory("Home")}>
          Home
        </p>
      </div>

      {/* Hero */}
      <div className="hero"></div>

      {/* Categories */}
      <div className="categoryRow">
        <div
  className="category"
  onClick={() => setSelectedCategory("Electronics")}
>
          <h2>Electronics</h2>
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700"
            alt=""
          />
        </div>

        <div className="category" onClick={() => setSelectedCategory("Fashion")}>
          <h2>Fashion</h2>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
            alt=""
          />
        </div>

        <div className="category" onClick={() => setSelectedCategory("Gaming")} >
          <h2>Gaming</h2>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700"
            alt=""
          />
        </div>

        <div className="category" onClick={() => setSelectedCategory("Home")}>
          <h2>Home Essentials</h2>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700"
            alt=""
          />
        </div>
      </div>

      {/* Products */}
      <div className="products">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>

            <img src={item.image} alt={item.name} />

            <h2>{item.price}</h2>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cartSidebar">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div
                className="cartItem"
                key={index}
              >
                <p>{item.name}</p>

                <button
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  Remove
                </button>
              </div>
            ))
          )}

          <button
            className="closeCart"
            onClick={() => setShowCart(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* Footer */}
      <footer>
        <button className="topBtn">
          Back to top
        </button>

        <div className="footerContent">
          <h3>Amazon Clone</h3>
          <p>Built using React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;