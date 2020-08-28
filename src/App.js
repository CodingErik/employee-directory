import React from 'react';
import Table from "./components/Table/Table"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from "./components/header/Header"
import "./App.css";



function App() {
  return (
    <Container fluid>
          <Header />
      <Row>
        <Col>
          <Table />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
