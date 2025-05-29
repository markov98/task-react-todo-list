import { useState } from 'react';
import type { Todo } from './types';
import TodoInput from './components/TodoInput';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };


  return (
    <div className="app">
      <h1 className='app-title'>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;