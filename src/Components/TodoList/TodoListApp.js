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
          id: 'example',
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
      <div className='App todobackground p-5 todolist'>
        <div
          className=' p-5'
          id='popup'
          style={{
            width: '400px',
            position: 'absolute',
            textAlign: 'center',
            top: '50%',
            left: '5%',
            transform: 'translate(0,-50%)',
            zIndex: '99',
            backgroundColor: 'rgba(255, 255, 255,.4)',
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
        <div
          className='m-auto   my-3 p-0 position-relative todoform'
          style={{}}
        >
          <h1 className='text-center todofont p-3 todotitle'>Todo List</h1>
          <div className='overflow-auto' style={{height: '400px'}}>
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
            style={{color: 'white'}}
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
            style={{color: 'white'}}
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
          <NavLink exact to='/TodoListHooked'>
            <button
              href=''
              className='btn my-5 p-4 todofont section mx-3 todobtn'
            >
              Hooked
            </button>
          </NavLink>{' '}
        </div>
      </div>
    );
  }
}

export default TodoListApp;
