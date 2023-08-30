import "./SubCategoryList.css";

export default function SubCategoryList({
  subCategories,
  activeSubCat,
  setActiveSubCat,
}) {
  const subCats = subCategories.map((cat) => (
    <li
      key={cat}
      className={cat === activeSubCat ? "active" : ""}
      onClick={() => setActiveSubCat(cat)}
    >
      {cat}
    </li>
  ));
  return <ul className="SubCategoryList">{subCats}</ul>;
}
