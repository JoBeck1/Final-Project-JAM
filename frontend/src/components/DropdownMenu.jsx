import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components"

function DropdownMenu() {
  return (
    <ContainerInDropdown className="position-absolute" >
        <Row  className="position-absolute  start-30 d-flex flex-column w-50">
          <Col>
          <Form className="mb-2 ">
           <Form.Group className="d-flex flex-row">
           
            <Form.Control type="text" placeholder="Search" />
           <Button type="submit" className="bg-info "> Search</Button>
           </Form.Group>
          </Form>
          </Col>
            <Col >

        <Dropdown  >
            <Dropdown.Toggle className="bg-info w-100"> Our recommendations </Dropdown.Toggle>
            <Dropdown.Menu className="bg-info w-100">
                <Dropdown.Item href="/"  > Books</Dropdown.Item>
                <Dropdown.Item href="/" > Guides</Dropdown.Item>
                <Dropdown.Item href="/" > Apps</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            </Col>
        </Row>

    </ContainerInDropdown>
  )
}

let ContainerInDropdown = styled(Container)`
    max-width: 40%;
    /* background-color:#27476E; */
    padding-top:1rem;
  
  
`

export default DropdownMenu