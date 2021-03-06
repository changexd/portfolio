import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import TodoList from './TodoList';
import TodoForms from './TodoForms';

class TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          task: 'Become a React.js developer',
          date: '2020/10/30',
          id: 'example2',
        },
        {
          task: 'Work in an awesome company!',
          date: '2020/11/30',
          id: 'example1',
        },
      ],
    };
    this.UpdateTodo = this.UpdateTodo.bind(this);
    this.DeleteTodo = this.DeleteTodo.bind(this);
  }
  UpdateTodo = (item) => {
    this.setState({todo: [...this.state.todo, item]});
  };
  //find out this component and change its state
  EditTodo = (eventid, newState) => {
    const editTarget = this.state.todo.findIndex(
      (target) => target.id === eventid
    );
    const edited = newState;
    const temptodo = [...this.state.todo];
    temptodo[editTarget] = edited;
    this.setState({todo: temptodo});
  };
  //using regexp to find the target(regexp is unecessary though, just wanted to practice)
  DeleteTodo = (event) => {
    const regexp = new RegExp(event.target.parentNode.id, 'g');
    const temptodo = this.state.todo.filter((ele) => !ele.id.match(regexp));
    this.setState({todo: temptodo});
    console.log(this.state.todo);
  };
  render() {
    return (
      <div className='todoApp '>
        <div className='popup'>
          {' '}
          <span onClick={this.props.handleleave}>X</span>
          This is a demonstration of how a child state passes to its parent{' '}
          <br /> You can try creating a new task and edit it or even delete it
          just like you normally do on Facebook!
          <br />{' '}
          這是用來展示child如何將state傳送至parent，你可以創建一個新的項目，並按下X或是edit去做如同臉書留言般即時的更動!
          <br />
          <br />
          而底下也有原始碼與medium詳解可以閱讀 點擊Hooked來看利用React Hook
          製作的吧!
        </div>
        <div className=' app__container'>
          <h1>Todo List</h1>
          <div className='todoList__container'>
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
          <TodoForms UpdateTodo={this.UpdateTodo} />
        </div>
        <div className='todo__buttons'>
          <a
            href='https://github.com/changexd/portfolio/tree/main/src/TodoList'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button href='https://github.com/changexd/portfolio/tree/main/src/TodoList'>
              Click me for the source code!
            </button>
          </a>{' '}
          <a
            href='https://medium.com/@darrenwang_1096/利用react-js-state做出可即時更改的todo-list-467c0f28eea8'
            style={{color: 'white'}}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Tutorial</button>
          </a>
          <NavLink exact to='/TodoListHooked'>
            <button href=''>Hooked</button>
          </NavLink>{' '}
        </div>
      </div>
    );
  }
}

export default TodoListApp;
