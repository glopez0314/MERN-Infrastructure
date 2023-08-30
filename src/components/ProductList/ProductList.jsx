import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ products }) {
  const productItems = products.map((product) => (
    <ProductListItem product={product} key={product.id} />
  ));
  console.log(productItems);
  return <main className="ProductList">{productItems}</main>;
}
