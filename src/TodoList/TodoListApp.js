import React, { Component } from 'react';
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
      <div className='App todobackground p-5 todolist'>
        <div
          className='m-auto   my-3 p-0 position-relative todoform'
          style={{}}
        >
          <h1 className='text-center todofont p-3 todotitle'>Todo List</h1>
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
        <div className='container text-center '>
          {' '}
          <a
            href='https://github.com/changexd/portfolio/tree/main/src/TodoList'
            style={{ color: 'white' }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button
              href='https://github.com/changexd/portfolio/tree/main/src/TodoList'
              className='btn my-5 p-4 todofont section todobtn'
            >
              Click me for the source code!
            </button>
          </a>{' '}
          <a
            href='https://medium.com/@darrenwang_1096/利用react-js-state做出可即時更改的todo-list-467c0f28eea8'
            style={{ color: 'white' }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button
              href=''
              className='btn my-5 p-4 todofont section mx-3 todobtn'
            >
              Tutorial
            </button>
          </a>{' '}
        </div>
      </div>
    );
  }
}

export default TodoListApp;
