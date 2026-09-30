import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  console.log(todosData);
  let filterData = todos;
  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <>
      <ul className="mx-auto mt-5 max-w-xl space-y-2">
        {filterData.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex items-center gap-3 rounded-md border p-3"
            >
              <input
                className="h-4 w-4 cursor-pointer"
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => {
                  toggleTodoAsCompleted(todo.id);
                }}
              />

              <label
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "text-gray-400 line-through" : ""
                }`}
                htmlFor={`todo-${todo.id}`}
              >
                {todo.task}
              </label>

              {todo.completed && (
                <button
                  className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                  onClick={() => {
                    handleDeleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;