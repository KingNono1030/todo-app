import Button from './Button';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo}
      <Button className="todo-list__todo" onClick={deleteTodo}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
