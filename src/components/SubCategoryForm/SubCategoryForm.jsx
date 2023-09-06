import { Component } from "react";
import { addSubCategory } from "../../utilities/subCategories-api";
import { Button, Form } from "react-bootstrap";

export default class SubCategoryForm extends Component {
  state = {
    name: "",
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
      const { name } = this.state;
      const formData = { name };
      await addSubCategory(formData);
    } catch (err) {
      this.setState({ error: "Invalid Form - Try Again", err });
    }
  };

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Product Type"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
