import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

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
    // 第一步:先將目標方塊的座標取出
    const targetId = event.target.id;
    const coor = targetId.split('');
    const box = this.state.boxes;
    const y = parseInt(coor[0]);
    const x = parseInt(coor[1]);
    const newBoxesValue = [...this.state.boxes];
    // 第二步:確認座標上下左右是否超出範圍，並將其關閉
    function flipCell(y, x) {
      if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        box[y][x] = !box[y][x];
      }
    }

    flipCell(y, x); //Flip initial cell
    flipCell(y, x - 1); //flip left
    flipCell(y, x + 1); //flip right
    flipCell(y - 1, x); //flip below
    flipCell(y + 1, x); //flip above
    let win = box.every((row) => row.every((cell) => !cell));
    // 最後回傳至state
    this.setState({
      boxes: box,
      win: win,
    });
  }

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
