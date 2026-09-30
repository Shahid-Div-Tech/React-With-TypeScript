import AddTodo from "./components/AddTodo";
import { Navbar } from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          TODO REACT + TYPESCRIPT
        </h1>

        <Navbar />
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
};

export default App;