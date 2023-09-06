import { Component } from "react";
import { addCategory } from "../../utilities/categories-api";
import { Button, Form } from "react-bootstrap";

export default class CategoryForm extends Component {
  state = {
    name: "",
    emoji: "",
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
      const { name, emoji } = this.state;
      const categoryData = { name, emoji };
      await addCategory(categoryData);
    } catch (err) {
      this.setState({ error: "Invalid Form - Try Again" });
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
            placeholder="Animal Type"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Emoji</Form.Label>
          <Form.Control
            type="text"
            name="emoji"
            placeholder="Use an Emoji"
            value={this.state.emoji}
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
