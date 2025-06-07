"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CreateTodo = ({ todoId }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [todos, setTodos] = React.useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    if (todoId) {
      fetchTodo();
    }
  }, [todoId]);
  const fetchTodo = async () => {
    try {
      const res = await fetch(`/api/crud/${todoId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch todo");
      }
      const data = await res.json();
      setTodos({
        title: data.todo.title,
        description: data.todo.description,
      });
    } catch (error) {
      console.error("Error fetching todo:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (todoId) {
      await updateTodo();
    } else {
      await createTodo();
    }
    setTodos({
      title: "",
      description: "",
    });
    setLoading(false);
    router.push("/list");
  };

  const createTodo = async () => {
    try {
      const res = await fetch("/api/crud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todos),
      });

      if (!res.ok) {
        throw new Error("Failed to create todo");
      }
    } catch (error) {
      console.error("Error creating todo:", error);
    } finally {
      setLoading(false);
    }
  };
  const updateTodo = async () => {
    try {
      const res = await fetch(`/api/crud`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...todos, id: todoId }),
      });

      if (!res.ok) {
        throw new Error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-blue-100/80">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {todoId ? "Update Todo" : "Create New Todo"}
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          {todoId
            ? "Update your task details"
            : "Add a new task to your collection"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
              />
            </svg>
            Title
          </label>
          <div className="relative group">
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-slate-700 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder:text-slate-400"
              placeholder="What needs to be done?"
              value={todos.title}
              onChange={(e) => setTodos({ ...todos, title: e.target.value })}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            Description
          </label>
          <div className="relative group">
            <textarea
              required
              className="w-full px-4 py-3 rounded-xl border border-blue-100 bg-white text-slate-700 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200 min-h-[160px] resize-y placeholder:text-slate-400"
              placeholder="Add more details about this task..."
              value={todos.description}
              onChange={(e) =>
                setTodos({ ...todos, description: e.target.value })
              }
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-end pt-6">
          <button
            type="button"
            onClick={() => router.push("/list")}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 text-sm font-medium rounded-full border border-blue-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Creating...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>{todoId ? "Update " : "Create "}Todo</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
