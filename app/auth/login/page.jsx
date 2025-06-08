"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });
    if (res.ok) {
      // Handle successful login, e.g., redirect to dashboard
      console.log("Login successful!", await res.json());
      router.push("/");
    } else {
      // Handle error
      const errorData = await res.json();
      console.log(`Login failed: ${errorData.message}`);
      setError({
        error: true,
        message: errorData.message || "Login failed. Please try again.",
      });
      // Optionally, set an error state to display to the user

      setFormData({
        username: "",
        password: "",
      });
      // Handle login logic here
    }
    setTimeout(() => {
      hideError();
    }, 3000);
  };

  const hideError = () => {
    setError({ error: false, message: "" });
  };
  return (
    <div className="flex items-center justify-center p-4 bg-gradient-to-br ">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl shadow-blue-500/20 transform -rotate-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to access your todos
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Username
              </label>
              <div className="relative group">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your username"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-200 pointer-events-none"></div>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-200 pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-600"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Sign in
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
      {error.error && (
        <ErrorMessage
          message={error.message}
          onClose={() => setError({ error: false, message: "" })}
        />
      )}
    </div>
  );
};

export default LoginPage;

export const ErrorMessage = ({ message, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) {
      onClose();
    }

    return () => clearInterval(timer);
  }, [timeLeft, onClose]);

  return (
    <div className="fixed w-auto min-w-[300px] top-24 right-4 p-6 bg-red-100 border-2 border-red-400 text-red-700 rounded-xl shadow-2xl animate-slideIn">
      <div className="flex items-center justify-between gap-6">
        <p className="break-words font-medium leading-relaxed">{message}</p>
        <div className="text-lg font-bold bg-red-200 px-3 py-1 rounded-full animate-pulse">
          {timeLeft}s
        </div>
      </div>
      <button
        onClick={onClose}
        className="mt-6 w-full px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 font-medium transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
      >
        Close
      </button>
    </div>
  );
};
