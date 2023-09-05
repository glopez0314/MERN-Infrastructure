import "./ProductList.css";
import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ products, handleAddToCart }) {
  const productItems = products.map((product) => (
    <ProductListItem
      product={product}
      key={product}
      handleAddToCart={handleAddToCart}
    />
  ));
  return <main className="ProductList">{productItems}</main>;
}
