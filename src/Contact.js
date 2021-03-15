import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="form_header">
      <Form onSubmit={handleSubmit} className="form_center">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={person.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
