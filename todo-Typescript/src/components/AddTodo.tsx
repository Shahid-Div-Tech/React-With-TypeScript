import { useState, type FormEvent } from "react";
import { useTodos } from "../store/todos";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mx-auto mt-5 flex max-w-xl gap-2"
    >
      <input
        type="text"
        name=""
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter todo"
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-md bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;