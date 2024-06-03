import Button from './Button';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="todo-list__todo">
      {todo}
      <Button className="todo-list__button--delete" onClick={deleteTodo}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
