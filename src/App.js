import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Texto inicia aqui, com 1Tb, 16bhsbsh akjaakak. DDDe sdkjdjierbbnnnn. E
          termina aqui. :D
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
