import "./CategoryList.css";
import { Card } from "react-bootstrap";

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <li
      key={cat}
      className={cat === activeCat ? "active" : ""}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));
  return (
    <Card className="CategoryCard">
      <Card.Body>
        <Card.Title>Animal:</Card.Title>
        <ul className="CategoryList">{cats}</ul>
      </Card.Body>
    </Card>
  );
}
