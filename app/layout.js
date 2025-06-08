import Navigation from "@/components/Navbar";
import "./globals.css"; 
import { headers } from "next/headers";

export const metadata = {
  title: "Modern Todo App",
  description: "A beautiful todo app with modern design",
};

export default async function RootLayout({ children }) { 
 
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100">
        <Navigation />
        <div className="min-h-screen pt-16 sm:pt-20">
          <main className="max-w-7xl mx-auto px-4 py-6 sm:py-10 sm:px-6 lg:px-8">
            <div className="animate-fade-in">{children}</div>
          </main>
          <footer className="mt-16 pb-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className="w-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></span>
              </div>
              <p className="text-sm text-slate-500">
                Built with modern design principles & Next.js
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
