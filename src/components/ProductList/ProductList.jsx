import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ products, handleAddToCart }) {
  const productItems = products.map((product) => (
    <ProductListItem
      product={product}
      key={product.id}
      handleAddToCart={handleAddToCart}
    />
  ));
  console.log(productItems);
  return <main className="ProductList">{productItems}</main>;
}
