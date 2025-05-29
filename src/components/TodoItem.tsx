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
            <td>{todo.text}</td>
            <td>{todo.completed ? <>Complete</> : <>Active</>}</td>
        </tr>
    );
}