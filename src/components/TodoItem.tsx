import type { Todo } from '../types';

interface Props {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

export default function TodoItem({ todo, toggleTodo }: Props) {
  return (
    <tr
      onClick={() => toggleTodo(todo.id)}
    >
     <th>{todo.text}</th>
     <th>{todo.completed ? <>Complete</> : <>Active</>}</th>
    </tr>
  );
}