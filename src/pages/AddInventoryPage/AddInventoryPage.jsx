import * as categoryAPI from "../../utilities/categories-api";

import CategoryForm from "../../components/categoryForm/categoryForm";

export default function AddInventoryPage() {
  return (
    <>
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            href="#category"
            aria-selected="true"
            role="tab"
          >
            Add Category
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            data-bs-toggle="tab"
            href="#subCategory"
            aria-selected="false"
            tabindex="-1"
            role="tab"
          >
            Add Sub-Category
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
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
      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade show active" id="category" role="tabpanel">
          <CategoryForm />
        </div>
        <div class="tab-pane fade" id="subCategory" role="tabpanel">
          <p>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
            single-origin coffee squid. Exercitation +1 labore velit, blog
            sartorial PBR leggings next level wes anderson artisan four loko
            farm-to-table craft beer twee. Qui photo booth letterpress, commodo
            enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
            PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
            mollit.
          </p>
        </div>
        <div class="tab-pane fade" id="product">
          <p>
            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
            out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
            readymade. Messenger bag gentrify pitchfork tattooed craft beer,
            iphone skateboard locavore carles etsy salvia banksy hoodie
            helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit
            cred pitchfork.
          </p>
        </div>
      </div>
    </>
  );
}
