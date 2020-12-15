import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';

class TodoForms extends Component {
  constructor(props) {
    super(props);
    //Using uuid to generate a unique key
    this.state = {task: '', date: '', id: uuidv4()};
    this.OnHandleChange = this.OnHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    //remember to use preventDefault to stop refreshing site each time we call the function
    event.preventDefault();
    this.state.task == '' || this.state.date == ''
      ? alert('you should not create an empty list!')
      : this.props.UpdateTodo(this.state);

    this.setState({task: '', date: '', id: uuidv4()});
  };
  //Computed property name
  OnHandleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='todoForm'>
          <label>Start Creating a Task!</label>
          <input
            name='task'
            onChange={this.OnHandleChange}
            type='text'
            placeholder='Task Here!'
            value={this.state.task}
          ></input>
          <input
            name='date'
            onChange={this.OnHandleChange}
            type='text'
            placeholder='Date Here!'
            value={this.state.date}
          ></input>
          <button>Create!</button>
        </form>
      </div>
    );
  }
}

export default TodoForms;
