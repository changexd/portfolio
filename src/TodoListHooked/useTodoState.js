import {useState} from 'react';

export default (initialValue) => {
  const [todo, setTodoState] = useState(initialValue);

  return {
    todo,
    AddTodo: (item) => {
      setTodoState([...todo, item]);
    },
    EditTodo: (target, newTask) => {
      const editTarget = todo.findIndex((item) => item.id === target);
      const edited = newTask;
      const temptodo = [...todo];
      temptodo[editTarget] = edited;
      setTodoState(temptodo);
      console.log(newTask);
    },
    DeleteTodo: (event) => {
      const regexp = new RegExp(event.target.parentNode.id, 'g');
      const temptodo = todo.filter((ele) => !ele.id.match(regexp));
      setTodoState(temptodo);
    },
  };
};
