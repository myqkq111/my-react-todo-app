import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

//Todo id값
let idAuto = 3;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      completed: true,
      title: '리액트 공부하기',
    },
    {
      id: 2,
      completed: false,
      title: '축구 연습하기',
    },
  ]);

  //Todo추가
  const addTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        id: idAuto,
        completed: false,
        title: title,
      },
    ];
    idAuto++;
    setTodos(newTodos);
  };

  //Todo 취소선
  const updateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed
      ? (newTodos[index].completed = false)
      : (newTodos[index].completed = true);

    setTodos(newTodos);
  };

  //Todo 삭제
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  //Todo 수정
  const putTodo = (value, index) => {
    const newTodos = [...todos];
    newTodos[index].title = value;

    setTodos(newTodos);
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">TodoList</h1>
        </div>
        <TodoInput addTodo={addTodo} />
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            putTodo={putTodo}
          />
        ))}
        {/* <TodoList {...todos} /> */}
      </div>
    </div>
  );
}

export default App;
