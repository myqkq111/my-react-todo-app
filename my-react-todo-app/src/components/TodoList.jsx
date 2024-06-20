import TodoItem from './TodoItem';

function TodoList({ todo, index, updateTodo, deleteTodo, putTodo }) {
  return (
    <ul>
      <TodoItem
        todo={todo}
        index={index}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        putTodo={putTodo}
      />
      {/* {props.map((todo, index) => (
        <TodoItem key={index} {...todo} />
      ))} */}
    </ul>
  );
}

export default TodoList;
