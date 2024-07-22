import React, { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Wpm.css";

function Wpm(props) {
  const [speed, setSpeed] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [level, setLevel] = useState("Average");

  var currentWord = props.word;
  currentWord = currentWord.toString();
  const words = "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.";

  function checkWord() {
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] !== words[i]) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (currentWord.endsWith(" ")) {
      if (checkWord()) {
        setCorrectWords(prevCount => prevCount + 1);
        if (!startTime) {
          setStartTime(new Date());
        } else {
          const now = new Date();
          const timeDiffInMinutes = (now - startTime) / 1000 / 60;
          const newSpeed = (correctWords / timeDiffInMinutes).toFixed(2);
          setSpeed(newSpeed);
          setLevel(determineLevel(newSpeed));
        }
      }
    }
  }, [currentWord]);

  function determineLevel(speed) {
    if (speed < 20) return "Slow";
    if (speed < 40) return "Average";
    if (speed < 60) return "Fast";
    return "Pro";
  }

  return (
    <ListGroup as="ul" className="list-group">
      <ListGroup.Item as="li" className="list-group-item">Current: {props.word}</ListGroup.Item>
      <ListGroup.Item as="li" className="list-group-item">Level: {level}</ListGroup.Item>
      <ListGroup.Item as="li" className="list-group-item">Speed: {speed}</ListGroup.Item>
    </ListGroup>
  );
}

export default Wpm;
