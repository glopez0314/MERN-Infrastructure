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
  return (
    <>
      {productItems.length ? (
        <main className="ProductList">{productItems}</main>
      ) : (
        <h1>No Products 😢</h1>
      )}
    </>
  );
}
