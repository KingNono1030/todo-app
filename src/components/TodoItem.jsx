import Button from './Button';

function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center my-1 mx-7 py-1 px-2 border border-solid border-accent-light rounded-md">
      {todo}
      <Button className="" onClick={deleteTodo}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
