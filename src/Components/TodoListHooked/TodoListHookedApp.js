import React from 'react';
import TodoList from './TodoList';
import TodoForms from './TodoForms';
import useTodoState from './useTodoState';

function TodoListHookedApp() {
  //Generated Example
  const exampleTodo = [
    {task: 'Become a front-end engineer', date: '2020/10/31', id: 'example1'},
    {task: 'Get good at coding', date: '2020/11/31', id: 'example2'},
  ];
  //Pass in exampleTodo as initialState
  const {todo, AddTodo, EditTodo, DeleteTodo} = useTodoState(exampleTodo);

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
        This is a hooked version of the todolist, you can use react developer
        tool to see it's function!
        <br /> 這裡是套用react Hook後的，可以利用react
        開發人員工具觀察Hook的變化!
        <br />
        <br />
        而底下也有本頁原始碼與套用詳解可以閱讀
      </div>
      <div className='m-auto   my-3 p-0 position-relative todoform'>
        <h1 className='text-center todofont p-3 todotitle'>Todo List</h1>
        <div className='overflow-auto' style={{height: '400px'}}>
          {todo.map((el, i) => {
            return (
              <TodoList
                key={el.id}
                task={el.task}
                date={el.date}
                DeleteTodo={DeleteTodo}
                id={el.id}
                EditTodo={EditTodo}
              />
            );
          })}
        </div>

        <div className='m-auto container'>
          <TodoForms AddTodo={AddTodo} />
        </div>
      </div>
      <div className='container text-center '>
        {' '}
        <a
          href='https://github.com/changexd/portfolio/tree/main/src/TodoListHooked'
          style={{color: 'white'}}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='btn my-5 p-4 todofont section todobtn'>
            Click me for the source code!
          </button>
        </a>{' '}
        <a
          href='https://medium.com/@darrenwang_1096/利用hook改造todolist-a39c3542d381'
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
      </div>
    </div>
  );
}

export default TodoListHookedApp;
