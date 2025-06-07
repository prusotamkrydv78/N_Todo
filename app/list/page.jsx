"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch("/api/crud");
      if (!res.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await res.json();
      setTodos(data.todos || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        const res = await fetch(`/api/crud/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) throw new Error('Failed to delete todo');
        fetchTodos(); // Refresh the list
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  }

  const gradientStyles = {
    primary: "from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30",
    secondary: "from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30",
    tertiary: "from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30",
    quaternary: "from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30"
  };

  if (loading) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <div className="animate-pulse w-48 h-10 bg-gradient-to-r from-blue-100 to-violet-100 rounded-2xl"></div>
          <div className="animate-pulse w-32 h-10 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-6">
          {[...Array(6)].map((_, i) => {
            const randomHeight = [64, 96, 128, 160][Math.floor(Math.random() * 4)];
            const gradients = Object.values(gradientStyles);
            const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

            return (
              <div key={i} className="break-inside-avoid mb-6">
                <div className={`animate-pulse rounded-2xl bg-gradient-to-br ${randomGradient} p-6 border border-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] backdrop-blur-sm`}>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/90 rounded-xl shadow-sm"></div>
                    <div className="w-2/3 h-6 bg-white/60 rounded-lg mb-4 ml-7"></div>
                  </div>
                  <div className={`h-${randomHeight} bg-white/40 rounded-lg mb-4`}></div>
                  <div className="h-4 bg-white/40 rounded-lg w-1/3"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="bg-gradient-to-r from-pastel-pink/20 to-pastel-red/20 rounded-2xl p-6 mb-6 max-w-md mx-auto backdrop-blur-sm border border-red-100">
          <svg className="w-12 h-12 mx-auto text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="font-medium text-red-600">{error}</p>
        </div>
        <button onClick={fetchTodos} className="btn btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-pastel-blue/30 to-pastel-purple/30 flex items-center justify-center transform -rotate-6">
            <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your Todo List is Empty
        </h2>
        <p className="text-slate-600 mb-8 max-w-sm mx-auto">
          Start organizing your tasks by creating your first todo
        </p>
        <a href="/crud/create" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pastel-blue to-pastel-purple text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 transform hover:-translate-y-0.5">
          <span>Create First Todo</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pastel-blue to-pastel-purple bg-clip-text text-transparent">
          Your Todos
        </h2>
        <Link href="/create" 
           className="group px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 flex items-center gap-2">
          <span className="relative">
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
          <span>New Todo</span>
        </Link>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-6">
        {todos.map((todo) => {
          const gradients = Object.values(gradientStyles);
          const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

          return (
            <div key={todo._id} className="break-inside-avoid mb-6">
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${randomGradient} backdrop-blur-sm border border-white/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 group`}>
                <div className="relative">
                  <span className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-xl shadow-md flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  <div className="absolute -top-2 right-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      className="p-2 rounded-lg bg-white/80 hover:bg-white text-blue-600 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow hover:rotate-12"
                      onClick={() => router.push(`/crud/edit/${todo._id}`)}
                    >
                      <span className="block transform transition-transform ">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </span>
                    </button>
                    <button 
                      className="p-2 rounded-lg bg-white/80 hover:bg-white text-red-500 hover:text-red-600 transition-all duration-200 shadow-sm hover:shadow hover:rotate-12"
                      onClick={() => handleDelete(todo._id)}
                    >
                      <span className="block transform transition-transform ">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 pl-7 text-slate-700 group-hover:text-blue-700 transition-colors duration-300">
                    {todo.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed min-h-[60px]">
                  {todo.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(todo.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-600 hover:text-blue-700 transform group-hover:translate-x-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
