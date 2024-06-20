import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useState, useRef } from 'react';

function TodoItem({ todo, index, updateTodo, deleteTodo, putTodo }) {
  const [putButton, setPutButton] = useState('');

  // 취소선
  let spanTail = `flex-grow cursor-pointer hover:cursor-wait ${putButton}`;
  if (todo.completed) {
    spanTail += ' line-through';
  }

  //수정, 삭제버튼 class
  let updateButton = `p-2 rounded-full shadow-md transition duration-300 bg-black hover:bg-orange-600 text-white ${putButton}`;
  let deleteButton = `p-2 rounded-full shadow-md transition duration-300 bg-red-800 hover:bg-red-600 text-white ${putButton}`;

  //수정 모드 input, button
  let inputTail = 'cursor-pointer hover:cursor-wait';
  putButton == '' ? (inputTail += ' hidden') : (inputTail += '');
  let saveButton = `p-2 rounded-full shadow-md transition duration-300 bg-black hover:bg-orange-600 text-white ${inputTail}`;

  //값 수정을 위한 요소 선택
  const inputRef = useRef(null);

  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md">
      {/* title 띄울 span */}
      <span
        className={spanTail}
        onClick={() => {
          updateTodo(index);
        }}
      >
        {todo.title}
      </span>
      {/* 수정모드시 수정할 input*/}
      <input
        type="text"
        ref={inputRef}
        defaultValue={todo.title}
        className={inputTail}
      />
      <div className="flex space-x-2">
        {/* 수정모드로 전환 버튼 */}
        <button
          className={updateButton}
          type="button"
          onClick={() => {
            setPutButton('hidden');
          }}
        >
          <FiEdit2 />
        </button>
        {/* 삭제 버튼 */}
        <button
          className={deleteButton}
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <FiTrash2 />
        </button>
        {/* 수정모드에서 수정완료 버튼 */}
        <button
          className={saveButton}
          onClick={() => {
            if (inputRef.current.value.trim() == '') {
              return;
            }
            putTodo(inputRef.current.value, index);
            setPutButton('');
          }}
        ></button>
      </div>
    </li>
  );
}

export default TodoItem;
