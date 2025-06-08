"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError({
        error: true,
        message: "Passwords do not match",
      });
      return;
    }
    // Handle registration logic here
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        username: formData.username,
        password: formData.password,
      }),
    });
    if (res.ok) {
      router.push("/auth/login");

      // Registration successful, redirect or show success message
      console.log("Registration successful!", await res.json());
    } else {
      // Handle error
      const errorData = await res.json();
      console.log(`Registration failed: ${errorData.message}`);
      setError({
        error: true,
        message: errorData.message || "Registration failed. Please try again.",
      });
    }

    // Reset form after submission
    setFormData({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="  flex items-center justify-center    ">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl shadow-blue-500/20 transform rotate-6">
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Join us to start organizing your tasks
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200"
        >
          <div className="space-y-4">
            {[
              {
                label: "Full Name",
                name: "fullName",
                type: "text",
                placeholder: "John Doe",
              },
              {
                label: "Username",
                name: "username",
                type: "text",
                placeholder: "johndoe",
              },

              {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "••••••••",
              },
              {
                label: "Confirm Password",
                name: "confirmPassword",
                type: "password",
                placeholder: "••••••••",
              },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  {field.label}
                </label>
                <div className="relative group">
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder={field.placeholder}
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-200 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Sign in link */}
        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
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

export default RegisterPage;

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className=" absolute top-18 right-2  flex items-center justify-center p-4 bg-red-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-red-500">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};
