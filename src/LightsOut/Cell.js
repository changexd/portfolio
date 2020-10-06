import React, { Component } from 'react';
import './Cell.css';

const Cell = ({ number, boxes, color, changeColor, col }) => {
  function randomcolor() {
    if (Math.round(Math.random() * 1) > 0) {
      return 'blueandpink 1.5s ease-in-out infinite alternate';
    } else {
      return 'pinkandblue 1.5s ease-in-out infinite alternate';
    }
  }
  const boxlist = boxes.map((el, i) => {
    return (
      <div
        onClick={changeColor}
        key={col + i}
        id={col + i}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `${el == 0 ? 'black' : '#61a0f1'}`,
          margin: 'auto',
          border: 'solid 2px white',
          display: 'inline-block',
          animation: `${el == 0 ? 'null' : randomcolor()}`,
        }}
      ></div>
    );
  });

  return <div>{boxlist}</div>;
};

export default Cell;
