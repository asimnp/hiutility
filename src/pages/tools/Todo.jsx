import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import Input from "../../components/Input";
import ToolHeader from "../../components/ToolHeader";
import { useLocalPersistedState } from "../../hooks/useLocalPersistedState";

export function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
  const [isDone, setIsDone] = useState(todo.isCompleted);

  const handleUpdateTodo = (id) => {
    setIsDone(!isDone);
    onUpdateTodo(id);
  };

  return (
    <div className="my-4 flex items-center justify-between rounded-md bg-gray-100 px-8 py-4 dark:bg-gray-900 dark:text-gray-300">
      <label className="flex cursor-pointer items-center gap-5">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer accent-red-600"
          checked={isDone}
          onChange={() => handleUpdateTodo(todo.id)}
        />
        <div
          className={`text-lg ${
            isDone
              ? "text-gray-400 line-through"
              : "text-gray-800 dark:text-gray-300"
          }`}
        >
          {todo.task}
        </div>
      </label>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="cursor-pointer hover:text-red-600"
      >
        <HiOutlineTrash size={22} />
      </button>
    </div>
  );
}

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useLocalPersistedState("TODOS", []);

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      task: todo,
      isCompleted: false,
    };

    setTodos(todos.concat(newTodo));
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleUpdateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="mx-5 mb-15 sm:container sm:mx-auto">
      <ToolHeader name="To-Do List" />
      <form onSubmit={handleAddTodo} className="flex items-center gap-2">
        <Input
          placeholder="Add a new todo..."
          state={todo}
          setState={setTodo}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-gray-800 px-6 py-3 text-white hover:bg-gray-950 dark:hover:bg-gray-700"
        >
          Add
        </button>
      </form>

      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
              onUpdateTodo={handleUpdateTodo}
            />
          ))
        ) : (
          <div className="my-5 text-red-600">
            &quot;No todos available&quot; – Sounds like a great time to panic
            or party. Choose wisely. 🎉🔥
          </div>
        )}
      </div>
    </div>
  );
}
