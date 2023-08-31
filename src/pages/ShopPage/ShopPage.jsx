import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";

import CategoriesList from "../../components/CategoriesList/CategoriesList";
import SubCategoriesList from "../../components/SubCategoriesList/SubCategoriesList";
import ProductList from "../../components/ProductList/ProductList";

export default function ShopPage({ user }) {
  const [productItems, setProductItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState("");
  const [cart, setCart] = useState(null);
  const categoryRef = useRef([]);
  const subCategoryRef = useRef([]);

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoryRef.current = [
        ...new Set(products.map((product) => product.category.name)),
      ];
      subCategoryRef.current = [
        ...new Set(products.map((product) => product.subCategory.name)),
      ];
      setProductItems(products);
      setActiveCategory(categoryRef.current[0]);
      setActiveSubCategory(subCategoryRef.current[0]);
    }
    getProducts();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToCart(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }
  return (
    <>
      <CategoriesList
        categories={categoryRef.current}
        activeCat={activeCategory}
        setActiveCat={setActiveCategory}
      />
      <SubCategoriesList
        subCategories={subCategoryRef.current}
        activeSubCat={activeSubCategory}
        setActiveSubCat={setActiveSubCategory}
      />
      <ProductList
        products={productItems.filter(
          (item) =>
            item.category.name === activeCategory &&
            item.subCategory.name === activeSubCategory
        )}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}
