import React from "react";

import { Form, Button } from "react-bootstrap";

import "../styles/styles.css";
class Signup extends React.Component {
 

  handleData = (e) => {
    e.preventDefault();
    this.props.history.push("/");
   
  };
  render() {
    return (
      <div className="body">
        <div className="form-div">
          <Form className="form" onSubmit={this.handleData}>
            <h5 className="title">Signup</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="data">User Name</Form.Label>
              <Form.Control
               pattern="[a-zA-Z]+"
                type="name"
                name="name"
                placeholder="Enter user name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="data">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="data">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="data">Genere</Form.Label>
              <Form.Control
                type="text"
                pattern="[a-zA-Z]+"
                name="genere"
                placeholder="comedy/thriller/action/drama"
                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <div className="hint">
            Already have an account ?{" "}
            <a href="/" className="link">
              Sign in
            </a>{" "}
            here
          </div>
         
        </div>
      </div>
    );
  }
}

export default Signup;