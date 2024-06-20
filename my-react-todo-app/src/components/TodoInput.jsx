import { FiPlus } from 'react-icons/fi';
import { useRef } from 'react';

function TodoInput({ addTodo }) {
  const inputRef = useRef(null);
  return (
    <form className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add your items"
        className="border-none outline-none p-2 flex-grow bg-green-100 focus:ring-0"
      ></input>
      <button
        className="bg-green-500 rounded-full text-white p-2 shadow-md hover:bg-green-600 transition duration-300"
        type="button"
        onClick={() => {
          if (inputRef.current.value.trim() === '') {
            return;
          }
          addTodo(inputRef.current.value);
          inputRef.current.value = '';
        }}
      >
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TodoInput;
