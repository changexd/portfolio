import React from 'react';
import {v4 as uuidv4} from 'uuid';
import useInputChange from '../GeneralFunction/useInputChange';

function TodoForms({AddTodo}) {
  const [task, TaskHandleChange, TaskReset] = useInputChange('');
  const [date, DateHandleChange, DateReset] = useInputChange('');

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          AddTodo({task, date, id: uuidv4()});
          TaskReset();
          DateReset();
        }}
      >
        <label
          className='d-block todofont'
          style={{
            margin: '15px',
            color: 'white',
            textDecoration: 'underline',
          }}
        >
          Start Creating a Task!
        </label>
        <input
          name='task'
          className='p-3 m-auto'
          onChange={(event) => {
            TaskHandleChange(event);
          }}
          style={{margin: '15px'}}
          type='text'
          placeholder='Task Here!'
          value={task}
        ></input>
        <input
          name='date'
          className='p-3'
          onChange={(event) => {
            DateHandleChange(event);
          }}
          style={{margin: '15px'}}
          type='text'
          placeholder='Date Here!'
          value={date}
        ></input>
        <button
          type='submit'
          className='btn btn-default todofont p-3'
          style={{
            margin: 'auto',
            color: 'white',
            backgroundColor: 'rgba(152, 204, 242,.4)',
          }}
        >
          Create!
        </button>
      </form>
    </div>
  );
}

export default TodoForms;
