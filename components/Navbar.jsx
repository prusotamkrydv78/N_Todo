import React from 'react'
import Link from 'next/link';
function Navigation() {
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
            <Link 
              href="/create" 
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="hidden sm:inline">Create</span>
            </Link>
            <Link 
              href="/list" 
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="hidden sm:inline">My Todos</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;