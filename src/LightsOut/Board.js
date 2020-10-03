import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/
function changeBox(y, x, array) {
  array[y][x] = !array[y][x];
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      number: '25',
      boxes: this.props.boxes,
      win: false,
    };
  }

  changeColor(event) {
    const targetId = event.target.id;
    const coor = targetId.split('');
    const box = this.state.boxes;
    const y = parseInt(coor[0]);
    const x = parseInt(coor[1]);
    const newBoxesValue = [...this.state.boxes];
    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        box[y][x] = !box[y][x];
      }
    }
    // TODO: flip this cell and the cells around it
    flipCell(y, x); //Flip initial cell
    flipCell(y, x - 1); //flip left
    flipCell(y, x + 1); //flip right
    flipCell(y - 1, x); //flip below
    flipCell(y + 1, x); //flip above

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let win = box.every((row) => row.every((cell) => !cell));

    this.setState({
      boxes: box,
      win: win,
    });
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  render() {
    console.log(this.state.boxes.flat().filter((el) => el == false).length);
    if (this.state.win == true) {
      console.log('congrats u win');
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ textAlign: 'center', width: 'auto', margin: 'auto' }}>
          <Cell
            boxes={this.state.boxes[0]}
            col='0'
            changeColor={this.changeColor}
          />
          <Cell
            boxes={this.state.boxes[1]}
            col='1'
            changeColor={this.changeColor}
          />
          <Cell
            boxes={this.state.boxes[2]}
            col='2'
            changeColor={this.changeColor}
          />
          <Cell
            boxes={this.state.boxes[3]}
            col='3'
            changeColor={this.changeColor}
          />
          <Cell
            boxes={this.state.boxes[4]}
            col='4'
            changeColor={this.changeColor}
          />
        </div>
      </div>
    );
  }
}

export default Board;
