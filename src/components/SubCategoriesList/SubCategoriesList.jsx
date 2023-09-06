import "./SubCategoriesList.css";
import Card from "react-bootstrap/Card";

export default function SubCategoryList({
  subCategories,
  activeSubCat,
  setActiveSubCat,
}) {
  const subCats = subCategories.map((subCat) => (
    <li
      key={subCat}
      className={subCat === activeSubCat ? "active" : ""}
      onClick={() => setActiveSubCat(subCat)}
    >
      {subCat}
    </li>
  ));
  return (
    <Card>
      <Card.Body>
        <Card.Title>Product:</Card.Title>
        <ul className="SubCategoryList">{subCats}</ul>
      </Card.Body>
    </Card>
  );
}
