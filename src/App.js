import React from 'react';
import Table from "./components/Table/Table"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from "./components/header/Header"

function App() {
  return (
    <div>
        <Header />
      <Container fluid>
        <Row>
          <Col>
            <Table />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;




