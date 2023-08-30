import { Component } from "react";
import { addProduct } from "../../utilities/products-api";
import { Button, Form } from "react-bootstrap";

export default class ProductForm extends Component {
  state = {
    name: "",
    description: "",
    brand: "",
    dimensions: "",
    weight: "",
    price: "",
    category: "",
    subCategory: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {
        name,
        description,
        brand,
        dimensions,
        weight,
        price,
        category,
        subCategory,
      } = this.state;
      const formData = {
        name,
        description,
        brand,
        dimensions,
        weight,
        price,
        category,
        subCategory,
      };
      const product = await addProduct(formData);
      console.log(product);
    } catch (err) {
      this.setState({ error: "Invalid Form - Try Again" });
    }
  };

  render() {
    const { cats, subCats } = this.props;
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Product Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Info Here"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Brand/Manufacturer</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            placeholder="Brand Name"
            value={this.state.brand}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Dimensions</Form.Label>
          <Form.Control
            type="text"
            name="dimensions"
            placeholder="Size of Product"
            value={this.state.dimensions}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            name="weight"
            placeholder="Product Weight"
            value={this.state.weight}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="0.00"
            value={this.state.price}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            placeholder=""
            value={this.state.category}
            onChange={this.handleChange}
            required
          >
            {cats.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProduct">
          <Form.Label>Sub-Category</Form.Label>
          <Form.Control
            as="select"
            name="subCategory"
            placeholder=""
            value={this.state.subCategory}
            onChange={this.handleChange}
            required
          >
            {subCats.map((subCat) => (
              <option key={subCat._id} value={subCat._id}>
                {subCat.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
