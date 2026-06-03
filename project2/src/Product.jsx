function Product({ title, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>₹{price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;