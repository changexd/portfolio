import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoForms extends Component {
  constructor(props) {
    super(props);
    //這邊利用uuid產生unique id方便做filter用
    this.state = { task: '', date: '', id: uuidv4() };
    this.OnHandleChange = this.OnHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    //這邊要記得利用preventDefault才不會每次submit後都refresh頁面
    event.preventDefault();
    this.props.UpdateTodo(this.state);
    this.setState({ task: '', date: '', id: uuidv4() });
  };

  OnHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label
            className='d-block todofont'
            style={{
              margin: '15px',
              color: 'white',
              textDecoration: 'underline',
            }}
          >
            Start Creating a Task!
          </label>
          <input
            name='task'
            className='p-3 m-auto'
            onChange={this.OnHandleChange}
            style={{ margin: '15px' }}
            type='text'
            placeholder='Task Here!'
            value={this.state.task}
          ></input>
          <input
            name='date'
            className='p-3'
            onChange={this.OnHandleChange}
            style={{ margin: '15px' }}
            type='text'
            placeholder='Date Here!'
            value={this.state.date}
          ></input>
          <button
            className='btn btn-default todofont p-3'
            style={{
              margin: 'auto',
              color: 'white',
              backgroundColor: 'rgba(152, 204, 242,.4)',
            }}
          >
            Create!
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForms;
