import "./globals.css"; 
import Link from "next/link";

export const metadata = {
  title: "Modern Todo App",
  description: "A beautiful todo app with modern design",
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text ">
              TodoApp
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/create" className="btn-soft">
              Create
            </Link>
            <Link href="/list" className="btn-soft">
              My Todos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Navigation />
        <div className="min-h-screen pt-16">
          <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="animate-fade-in">{children}</div>
          </main>
          <footer className="mt-16 pb-8 text-center">
            <p className="text-sm text-slate-600">
              Built with modern design principles & Next.js
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
