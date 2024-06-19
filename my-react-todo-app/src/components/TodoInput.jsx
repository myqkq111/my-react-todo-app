import { FiPlus } from 'react-icons/fi';

function TodoInput() {
  return (
    <form className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb-6">
      <input
        type="number"
        placeholder="Add your items"
        className="border-none outline-none p-2 flex-grow bg-green-100 focus:ring-0"
      ></input>
      <button className="bg-green-500 rounded-full text-white p-2 shadow-md hover:bg-green-600 transition duration-300 ">
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TodoInput;
