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
    <div className='todoApp'>
      <div className=' popup'>
        {' '}
        <span>X</span>
        This is a hooked version of the todolist, you can use react developer
        tool to see it's function!
        <br /> 這裡是套用react Hook後的，可以利用react
        開發人員工具觀察Hook的變化!
        <br />
        <br />
        而底下也有本頁原始碼與套用詳解可以閱讀
      </div>
      <div className='app__container'>
        <h1>Todo List</h1>
        <div className='todoList__container'>
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

        <TodoForms AddTodo={AddTodo} />
      </div>
      <div className='todo__buttons '>
        <a
          href='https://github.com/changexd/portfolio/tree/main/src/TodoListHooked'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>Click me for the source code!</button>
        </a>
        <a
          href='https://medium.com/@darrenwang_1096/利用hook改造todolist-a39c3542d381'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button href=''>Tutorial</button>
        </a>
      </div>
    </div>
  );
}

export default TodoListHookedApp;
