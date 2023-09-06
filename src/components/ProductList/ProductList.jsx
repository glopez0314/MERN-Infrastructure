import "./ProductList.css";
import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ products, handleAddToCart }) {
  const productItems = products.map((product, idx) => (
    <ProductListItem
      product={product}
      key={idx}
      handleAddToCart={handleAddToCart}
    />
  ));
  return <main className="ProductList">{productItems}</main>;
}
