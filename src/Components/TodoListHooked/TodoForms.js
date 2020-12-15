import React from 'react';
import {v4 as uuidv4} from 'uuid';
import useInputChange from '../GeneralFunction/useInputChange';

function TodoForms({AddTodo}) {
  const [task, TaskHandleChange, TaskReset] = useInputChange('');
  const [date, DateHandleChange, DateReset] = useInputChange('');

  return (
    <div>
      <form
        className='todoForm'
        onSubmit={(event) => {
          event.preventDefault();
          AddTodo({task, date, id: uuidv4()});
          TaskReset();
          DateReset();
        }}
      >
        <label>Start Creating a Task!</label>
        <input
          name='task'
          onChange={(event) => {
            TaskHandleChange(event);
          }}
          type='text'
          placeholder='Task Here!'
          value={task}
        ></input>
        <input
          name='date'
          onChange={(event) => {
            DateHandleChange(event);
          }}
          type='text'
          placeholder='Date Here!'
          value={date}
        ></input>
        <button type='submit'>Create!</button>
      </form>
    </div>
  );
}

export default TodoForms;
