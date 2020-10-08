import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoForms extends Component {
  constructor(props) {
    super(props);
    //Using uuid to generate a unique key
    this.state = { task: '', date: '', id: uuidv4() };
    this.OnHandleChange = this.OnHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    //remember to use preventDefault to stop refreshing site each time we call the function
    event.preventDefault();
    this.props.UpdateTodo(this.state);
    this.setState({ task: '', date: '', id: uuidv4() });
  };
  //Computed property name
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
