import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForms from './TodoForms';

class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [{ task: 'This is an Example', date: '2019/05/07', id: 'example' }],
    };
    this.UpdateTodo = this.UpdateTodo.bind(this);
    this.DeleteTodo = this.DeleteTodo.bind(this);
  }
  UpdateTodo = (item) => {
    this.setState({ todo: [...this.state.todo, item] });
  };
  EditTodo = (eventid, newState) => {
    const editTarget = this.state.todo.findIndex(
      (target) => target.id === eventid
    );
    const edited = newState;
    const temptodo = [...this.state.todo];
    temptodo[editTarget] = edited;
    this.setState({ todo: temptodo });
  };

  DeleteTodo = (event) => {
    const regexp = new RegExp(event.target.parentNode.id, 'g');
    const temptodo = this.state.todo.filter((ele) => !ele.id.match(regexp));
    this.setState({ todo: temptodo });
    console.log(this.state.todo);
  };
  render() {
    return (
      <div className='App todobackground p-3'>
        <div
          className='container  my-3 p-0 position-relative'
          style={{
            height: 'auto',
            width: '700px',
            backgroundColor: '#175B8E',
            boxShadow: '-15px -15px #358ACA ',
          }}
        >
          <h1 className='text-center todofont p-3' style={{ fontSize: '60px' }}>
            Todo List
          </h1>
          <div className='overflow-auto' style={{ height: '400px' }}>
            {this.state.todo.map((el, i) => {
              return (
                <TodoList
                  key={el.id}
                  task={el.task}
                  date={el.date}
                  DeleteTodo={this.DeleteTodo}
                  id={el.id}
                  EditTodo={this.EditTodo}
                />
              );
            })}
          </div>

          <div className='m-auto container'>
            <TodoForms UpdateTodo={this.UpdateTodo} />
          </div>
        </div>
        <div className='container text-center'>
          {' '}
          <button
            className='btn my-5 p-4 todofont section'
            style={{
              backgroundColor: '#175B8E',
              color: 'white',
              fontSize: '30px',
              boxShadow: '-10px -10px #358ACA ',
            }}
          >
            {' '}
            Click me for the source code!{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListApp;
