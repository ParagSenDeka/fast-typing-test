import React from 'react';
import Card from 'react-bootstrap/Card';
import './Words.css';

function Words() {
  return (
    <Card bg="primary" text="white" className="mb-2">
      <Card.Body>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Words;
