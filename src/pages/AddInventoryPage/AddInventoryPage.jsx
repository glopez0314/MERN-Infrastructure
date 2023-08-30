import { useState, useEffect } from "react";
import * as catAPI from "../../utilities/categories-api";
import * as subCatAPI from "../../utilities/subCategories-api";

import CategoryForm from "../../components/categoryForm/categoryForm";
import SubCategoryForm from "../../components/SubCategoryForm/SubCategoryForm";
import ProductForm from "../../components/ProductForm/ProductForm";

export default function AddInventoryPage() {
  const [cats, setCats] = useState([]);
  const [subCats, setSubCats] = useState([]);

  useEffect(function () {
    async function fetchCats() {
      try {
        const res = await catAPI.getCats();
        setCats(res);
      } catch (err) {
        console.log("Error fetching sub-Categories", err);
      }
    }
    fetchCats();

    async function fetchSubCats() {
      try {
        const res = await subCatAPI.getSubCats();
        setSubCats(res);
      } catch (err) {
        console.log("Error fetching sub-Categories", err);
      }
    }
    fetchSubCats();
  }, []);
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#category"
            aria-selected="true"
            role="tab"
          >
            Add Category
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#subCategory"
            aria-selected="false"
            tabindex="-1"
            role="tab"
          >
            Add Sub-Category
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#product"
            aria-selected="false"
            tabindex="-1"
            role="tab"
          >
            Add Product
          </a>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div
          className="tab-pane fade show active"
          id="category"
          role="tabpanel"
        >
          <CategoryForm />
        </div>
        <div className="tab-pane fade" id="subCategory" role="tabpanel">
          <SubCategoryForm />
        </div>
        <div className="tab-pane fade" id="product" role="tabpanel">
          <ProductForm cats={cats} subCats={subCats} />
        </div>
      </div>
    </>
  );
}
