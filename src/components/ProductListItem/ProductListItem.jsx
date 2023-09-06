import "./ProductListItem.css";

export default function ProductListItem({ product, handleAddToCart }) {
  function truncateWords(target, num) {
    const words = target.split(" ");
    if (words.length > num) {
      return words.slice(0, num).join(" ") + "...";
    } else {
      return target;
    }
  }
  return (
    <div className="ProductListItem">
      <div className="name flex-ctr-ctr">{product.name}</div>
      <div className="info">{truncateWords(product.description, 9)}</div>
      <div className="buy">
        <span>${product.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToCart(product._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}
