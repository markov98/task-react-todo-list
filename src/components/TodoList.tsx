import  type{ Todo } from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

export default function TodoList({ todos, toggleTodo }: Props) {
  return (
    <table className='todo-list'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </table>
  );
}