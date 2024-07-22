import Form from 'react-bootstrap/Form';
import Wpm from './Wpm';
import React, { useState } from 'react';
import './Type.css';

function Type(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state
  };

  return (
    <div className="container">
      <div className="wpm-container">
        <Wpm word={inputValue}></Wpm>
      </div>
      <Form className="form-group">
        <Form.Label htmlFor="words" className="form-label">Type here</Form.Label>
        <Form.Control
          type="text"
          id="words"
          value={inputValue}
          onChange={handleInputChange} // Handle change event
          className="form-control"
        />
      </Form>
    </div>
  );
}

export default Type;
