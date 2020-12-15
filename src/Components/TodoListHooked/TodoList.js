import React from 'react';
import useToggleState from '../GeneralFunction/useToggleState';
import useInputChange from '../GeneralFunction/useInputChange';

function TodoList({key, task, date, id, EditTodo, DeleteTodo}) {
  const [editValue, ToggleState] = useToggleState(false);
  const [taskValue, TaskHandleChange] = useInputChange(task);
  const [dateValue, DateHandleChange] = useInputChange(date);
  if (editValue === false) {
    return (
      <div className='todoItem'>
        <div id={date} className='todoItem__container'>
          <div className='todoItem__task section'>
            <p>{taskValue}</p>
          </div>
          <div className='todoItem__date section'>
            <p>{dateValue}</p>
          </div>
          <div id={id} className='todoItem__option section'>
            <p
              onClick={(event) => {
                DeleteTodo(event);
              }}
            >
              x
            </p>
          </div>
          <div className='todoItem__option section'>
            <p onClick={ToggleState}>edit</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='todoItem '>
        <div id={id}>
          <form className='todoItem__container'>
            <div className='todoItem__task section'>
              <input
                className='todoItem__editArea'
                name='task'
                value={taskValue}
                onChange={(event) => {
                  TaskHandleChange(event);
                }}
              ></input>
            </div>
            <div className='todoItem__date section'>
              <input
                className='todoItem__editArea section'
                name='date'
                value={dateValue}
                onChange={(event) => {
                  DateHandleChange(event);
                }}
              ></input>
            </div>
            <div id={id} className='todoItem__option section'>
              <p
                onClick={(event) => {
                  DeleteTodo(event);
                }}
              >
                x
              </p>
            </div>
            <div id={id} className='todoItem__option section'>
              <p
                onClick={(event) => {
                  EditTodo(event.target.parentNode.id, {
                    task: taskValue,
                    date: dateValue,
                    id: id,
                  });
                  ToggleState();
                }}
              >
                done!
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
