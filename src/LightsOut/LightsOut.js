import React, { Component } from 'react';
import Board from './Board';
import { v4 as uuidv4 } from 'uuid';

/** Simple app that just shows the LightsOut game. */
class LightsOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: new Array(5).fill('').map((el) => {
        return new Array(5).fill().map((el) => {
          return Math.random() >= 0.5;
        });
      }),
    };
    this.restart = this.restart.bind(this);
  }
  restart = () => {
    this.setState({
      boxes: new Array(5).fill('').map((el) => {
        return new Array(5).fill().map((el) => {
          return Math.random() >= 0.5;
        });
      }),
    });
  };
  render() {
    return (
      <div
        className='App p-2 m-auto lightsout'
        style={{ backgroundColor: 'black' }}
      >
        <div
          id='popup'
          className=' p-5'
          style={{
            width: '400px',
            position: 'absolute',
            textAlign: 'center',
            top: '50%',
            left: '5%',
            transform: 'translate(0,-50%)',
            zIndex: '99',
            backgroundColor: 'rgba(255, 255, 255,.8)',
          }}
        >
          {' '}
          <span
            onClick={this.props.handleleave}
            className='p-2'
            style={{
              position: 'absolute',
              right: '1%',
              top: '1%',
              cursor: 'pointer',
            }}
          >
            X
          </span>
          This is a LightsOut Game, turning off all the lights to win the game!{' '}
          <br /> You can click on each block and see how they change
          <br /> 這是一個關燈遊戲，把所有的燈都關掉就獲勝!
          <br />
          可以觀察一下方塊之間是如何進行互動的
          <br />
          而底下也有原始碼可以參考
        </div>
        <h1 className='lightsoutfont text-center p-5'>Lights Out Game! </h1>
        <div
          className='container p-2'
          style={{ backgroundColor: '#ECF593', width: 'max-content' }}
        >
          <Board boxes={this.state.boxes} key={uuidv4()} />
        </div>
        <button
          onClick={this.restart}
          className='d-block mx-auto my-5 btn p-3 lightsoutbuttons'
          style={{ backgroundColor: '#61a0f1' }}
        >
          Restart!{' '}
        </button>{' '}
        <a
          href='https://github.com/changexd/portfolio/tree/main/src/LightsOut'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='d-block  mx-auto my-5 btn p-3 lightsoutbuttons '
            style={{ backgroundColor: '#ff4da6' }}
          >
            Click me for Source Code!
          </button>
        </a>
      </div>
    );
  }
}

export default LightsOut;
