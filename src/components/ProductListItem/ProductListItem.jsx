import "./ProductListItem.css";

export default function ProductListItem({ product, handleAddToCart }) {
  return (
    <div className="ProductListItem">
      <div className="name flex-ctr-ctr">{product.name}</div>
      <div className="info">{product.description}</div>
      <div className="buy">
        <span>${product.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToCart(product._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}
