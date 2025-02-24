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
    <div className="flex justify-between items-center bg-gray-100 px-8 py-4 rounded-md my-4">
      <label className="flex items-center gap-5 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 accent-red-600 cursor-pointer"
          checked={isDone}
          onChange={() => handleUpdateTodo(todo.id)}
        />
        <div
          className={`text-lg ${
            isDone ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.task}
        </div>
      </label>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="hover:text-red-600 cursor-pointer"
      >
        <HiOutlineTrash size={22} />
      </button>
    </div>
  );
}

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useLocalPersistedState("TODOS", []);

  const handleAddTodo = () => {
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
    <div className="container mx-auto">
      <ToolHeader name="To-Do List" />
      <div className="flex items-center gap-2">
        <Input
          placeholder="Add a new todo..."
          state={todo}
          setState={setTodo}
        />
        <button
          type="button"
          onClick={handleAddTodo}
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-950 cursor-pointer"
        >
          Add
        </button>
      </div>

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
          <div className="text-red-600 my-5">
            &quot;No todos available&quot; – Sounds like a great time to panic
            or party. Choose wisely. 🎉🔥
          </div>
        )}
      </div>
    </div>
  );
}
