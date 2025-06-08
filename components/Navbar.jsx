"use client";
import React, { useState } from "react";
import Link from "next/link";
import { User } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify({ isLogined: false }));
    router.push("/auth/login");
    setIsDropdownOpen(false);
    User.isLogined = false;
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
              ✨ TodoApp
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            {User?.isLogined && (
              <>
                <Link
                  href="/create"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-2"
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="hidden sm:inline">Create</span>
                </Link>
                <Link
                  href="/list"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="hidden sm:inline">My Todos</span>
                </Link>
              </>
            )}

            {!User && (
              <>
                <Link
                  href="/auth/login"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 flex items-center gap-2"
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
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="hidden sm:inline">Login</span>
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 flex items-center gap-2"
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Register</span>
                </Link>
              </>
            )}
            {User?.isLogined && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
