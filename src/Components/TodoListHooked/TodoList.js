import React from 'react';
import UseToggleState from '../GeneralFunction/UseToggleState';
import UseInputChange from '../GeneralFunction/UseInputChange';

function TodoList({key, task, date, id, EditTodo, DeleteTodo}) {
  const [editValue, ToggleState] = UseToggleState(false);
  const [taskValue, TaskHandleChange] = UseInputChange(task);
  const [dateValue, DateHandleChange] = UseInputChange(date);
  if (editValue === false) {
    return (
      <div className='container my-3'>
        <div
          id={date}
          className='row px-3 py-2'
          style={{
            backgroundColor: 'rgba(152, 204, 242,.4)',
          }}
        >
          <div className='d-inline-block   col-5 p-2 m-auto section'>
            <p className='m-2 todofont' style={{color: 'white'}}>
              {taskValue}
            </p>
          </div>
          <div className='d-inline-block col-5 p-2 m-auto section'>
            <p className='m-2 todofont' style={{color: 'white'}}>
              {dateValue}
            </p>
          </div>
          <div id={id} className='d-inline-block   col-1 p-2 m-auto section'>
            <p
              className='m-2 todofont'
              style={{color: 'white', cursor: 'pointer'}}
              onClick={(event) => {
                DeleteTodo(event);
              }}
            >
              x
            </p>
          </div>
          <div className='d-inline-block col-1 p-2 m-auto section'>
            <p
              className='m-2 todofont'
              style={{color: 'white', cursor: 'pointer'}}
              onClick={ToggleState}
            >
              edit
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container my-3 '>
        <div id={id}>
          <form
            className='row px-3 py-2'
            style={{
              backgroundColor: 'rgba(152, 204, 242,.4)',
            }}
          >
            <div
              className='d-inline-block col-5 p-2 m-auto section'
              style={{width: 'auto'}}
            >
              <input
                className='todofont'
                style={{
                  width: 'auto',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: 'none',
                }}
                name='task'
                value={taskValue}
                onChange={(event) => {
                  TaskHandleChange(event);
                }}
              ></input>
            </div>
            <div
              className='d-inline-block col-5 p-2 m-auto section '
              style={{width: 'auto'}}
            >
              <input
                className='todofont'
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: 'none',
                }}
                name='date'
                value={dateValue}
                onChange={(event) => {
                  DateHandleChange(event);
                }}
              ></input>
            </div>
            <div id={id} className='d-inline-block col-1 p-2 m-auto section'>
              <p
                className='m-2 todofont'
                onClick={(event) => {
                  DeleteTodo(event);
                }}
                style={{cursor: 'pointer'}}
              >
                x
              </p>
            </div>
            <div id={id} className='d-inline-block col-1 p-2 m-auto section'>
              <p
                className='m-2 todofont'
                onClick={(event) => {
                  EditTodo(event.target.parentNode.id, {
                    task: taskValue,
                    date: dateValue,
                    id: id,
                  });
                  ToggleState();
                }}
                style={{cursor: 'pointer'}}
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
