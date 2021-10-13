import React from "react";
import "../styles/styles.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      obj: {},
    };
  }

  handleData = (e) => {
    e.preventDefault();
    this.props.history.push("/movie");

    
  };
  render() {
    return (
      <div className="body">
        <div className="form-div">
         
          <Form className="form" onSubmit={this.handleData}>
            <h5 className="title">Login</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="data" style={{color: "white"}}>User Name</Form.Label>
              <Form.Control
                type="text"
                pattern="[a-zA-Z]+"
                name="name"
                placeholder="Enter User Name"
                required

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="data">Password</Form.Label>
              <Form.Control
                type="password"
                
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="hint">
            Dont have an account ?{" "}
            <a href="/signup" className="link">
              Register
            </a>{" "}
            here
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
