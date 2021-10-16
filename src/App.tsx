import './App.css';
import { useState } from 'react';
import NewTodo from './components/newTodo';
import Todos from './components/todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  };

  const removeHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemove={removeHandler}/>
    </div>
  );
}

export default App;
