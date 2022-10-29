import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

function DropdownMenu() {
  return (
    <ContainerInDropdown className="position-absolute">
      <Row className="position-absolute  start-30 d-flex flex-column w-70">
        <Col>
          <Form className="mb-2 ">
            <Form.Group className="d-flex flex-row">
              <Form.Control type="text" placeholder="Search" />
              <Button type="submit" className="bg-info ">
                {" "}
                Search
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle className="bg-info w-100">
              {" "}
              Our Recommendations{" "}
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-info w-100">
              <Dropdown.Item href="/"> Books</Dropdown.Item>
              <Dropdown.Item href="/"> Guides</Dropdown.Item>
              <Dropdown.Item href="/"> Apps</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </ContainerInDropdown>
  );
}

const ContainerInDropdown = styled(Container)`
  padding: 15px;
   width: 20vw;
  .dropdown-item {
    color: white;
  }
  .dropdown-item:hover {
    color: black;
  }
  .dropdown-toggle {
    color: white;
  }
  .dropdown {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    //background-color: #79c1e2;
  }
  .form-control {
    background-color: #79c1e2;
    color: #635a5a;
  }
  .btn {
    background-color: #79c1e2;
    color: #635a5a;
    border: 1px solid #635a5a;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .btn:hover {
    background-color: #635a5a;
    color: #feffff;
    border: 1px solid #79c1e2;
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export default DropdownMenu;
