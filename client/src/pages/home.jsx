import { useState } from "react";

export const Home = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = newTodo.trim();

    if (trimmed === "") return;
    setTodos([
      {
        id: newTodo.id || todos.length + 1,
        title: newTodo,
        completed: newTodo.completed || false,
        createdAt: newTodo.createdAt || new Date(),
        updatedAt: new Date(),
      },
      ...todos,
    ]);
    setNewTodo("");
  };

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const onClickDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onEditClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    const edit = todos.find((todo) => todo.id === id).title;
    setNewTodo(edit);
  };

  const toggleTodoStatus = (id) => {
    3;
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  return (
    <div className="max-w-screen-md mx-auto rounded-lg shadow-lg p-3">
      <h1 className="text-2xl font-semibold">MY DAY</h1>
      <div>{todayDate}</div>
      <div>
        <form action="">
          <input
            type="text"
            className="flex-grow w-full p-2 border border-gray-300 rounded"
            placeholder="New Task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-sky-600 text-white my-1 p-2 px-10 flex mx-auto rounded"
          >
            Add
          </button>
        </form>
      </div>
      <div className="mb-4">
        {pendingTodos.length > 0 ? (
          pendingTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center p-2 border-b border-gray-200"
            >
              {" "}
              <div>
                <button
                  className="text-lg mr-2"
                  onClick={() => toggleTodoStatus(todo.id)}
                >
                  {todo.completed ? "☑️" : "🔳"}
                </button>
                <span>{todo.title}</span>
              </div>
              <div className="flex">
                <button
                  onClick={() => onEditClick(todo.id)}
                  className="text-blue-500 ml-1 border-2"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onClickDelete(todo.id)}
                  className="text-red-500 ml-1 text-xl border-2"
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-2 mt-2 underline underline-offset-4 font-bold">
            No pending tasks
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowCompleted(!showCompleted)}
          className="w-full text-center p-2 bg-gray-200 rounded"
        >
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </button>
      </div>
      {showCompleted && (
        <div className="mt-2">
          {completedTodos.length > 0 ? (
            completedTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between bg-gray-300 items-center p-2 border-b border-gray-200"
              >
                <div>
                  <button
                    onClick={() => toggleTodoStatus(todo.id)}
                    className={`text-lg mr-2`}
                  >
                    {todo.completed ? "☑️" : "🔳"}
                  </button>
                  <span>{todo.title}</span>
                </div>
                <div className="flex">
                  <button
                    onClick={() => onEditClick(todo.id)}
                    className="text-blue-500 ml-1 border-2"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onClickDelete(todo.id)}
                    className="text-red-500 ml-1 text-xl border-2"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-2 mt-2 underline underline-offset-4 font-bold">
              No completed tasks
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

let initialTodos = [
  {
    id: 1,
    title: "Reading",
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Workout",
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Cooking",
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: "Cleaning",
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
