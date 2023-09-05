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
      <Card.Title>
        <h4>Product:</h4>
      </Card.Title>
      <Card.Body>
        <ul className="SubCategoryList">{subCats}</ul>
      </Card.Body>
    </Card>
  );
}
